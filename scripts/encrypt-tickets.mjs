import { webcrypto as crypto } from 'node:crypto'
import { readFile, writeFile, readdir, unlink } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const TICKETS_DIR = join(__dirname, '..', 'public', 'tickets')
const PASSWORD = process.env.TICKET_PASSWORD ?? 'endicott'
const PBKDF2_ITERATIONS = 100_000

async function deriveKey(password, salt) {
  const baseKey = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(password),
    'PBKDF2',
    false,
    ['deriveKey'],
  )
  return crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt, iterations: PBKDF2_ITERATIONS, hash: 'SHA-256' },
    baseKey,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt'],
  )
}

async function encryptFile(inputPath, outputPath) {
  const data = await readFile(inputPath)
  const salt = crypto.getRandomValues(new Uint8Array(16))
  const iv = crypto.getRandomValues(new Uint8Array(12))
  const key = await deriveKey(PASSWORD, salt)
  const ciphertext = new Uint8Array(
    await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, data),
  )
  const out = new Uint8Array(salt.length + iv.length + ciphertext.length)
  out.set(salt, 0)
  out.set(iv, salt.length)
  out.set(ciphertext, salt.length + iv.length)
  await writeFile(outputPath, out)
  console.log(`encrypted: ${inputPath} -> ${outputPath} (${out.length} bytes)`)
}

const entries = await readdir(TICKETS_DIR)
const pdfs = entries.filter((f) => f.endsWith('.pdf'))
if (pdfs.length === 0) {
  console.log('no .pdf files to encrypt')
  process.exit(0)
}
for (const f of pdfs) {
  const inputPath = join(TICKETS_DIR, f)
  const outputPath = join(TICKETS_DIR, `${f}.enc`)
  await encryptFile(inputPath, outputPath)
  await unlink(inputPath)
  console.log(`removed plaintext: ${inputPath}`)
}
