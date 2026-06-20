import { base } from '../data/base'

const PBKDF2_ITERATIONS = 100_000
const SESSION_KEY = 'ticket-password'
const blobCache = new Map<string, string>()

async function deriveKey(password: string, salt: BufferSource): Promise<CryptoKey> {
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
    ['decrypt'],
  )
}

async function decryptToBlob(url: string, password: string): Promise<Blob> {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`fetch failed: ${res.status}`)
  const buf = new Uint8Array(await res.arrayBuffer())
  const salt = buf.slice(0, 16) as BufferSource
  const iv = buf.slice(16, 28) as BufferSource
  const ciphertext = buf.slice(28) as BufferSource
  const key = await deriveKey(password, salt)
  const plain = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, ciphertext)
  return new Blob([plain], { type: 'application/pdf' })
}

export async function openTicket(relativeUrl: string): Promise<void> {
  const fullUrl = base + relativeUrl + '.enc'

  const cached = blobCache.get(fullUrl)
  if (cached) {
    window.open(cached, '_blank', 'noopener')
    return
  }

  let password = sessionStorage.getItem(SESSION_KEY) ?? ''

  for (let attempt = 0; attempt < 3; attempt++) {
    if (!password) {
      const entered = window.prompt('Enter password to view tickets:')
      if (entered === null) return
      password = entered
    }
    try {
      const blob = await decryptToBlob(fullUrl, password)
      const objectUrl = URL.createObjectURL(blob)
      blobCache.set(fullUrl, objectUrl)
      sessionStorage.setItem(SESSION_KEY, password)
      window.open(objectUrl, '_blank', 'noopener')
      return
    } catch {
      sessionStorage.removeItem(SESSION_KEY)
      password = ''
      if (attempt < 2) {
        window.alert('Incorrect password.')
      } else {
        window.alert('Incorrect password. Cancelling.')
      }
    }
  }
}
