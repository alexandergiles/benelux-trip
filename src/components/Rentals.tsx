import { ExternalLink } from 'lucide-react'
import type { Rental } from '../data/trip'
import { useFadeIn } from './useFadeIn'
import { base } from '../data/base'

interface Props {
  id?: string
  heading: string
  rentals: Rental[]
  photo: string
  photoAlt: string
  tint: 'limburg-tint' | 'coral-tint'
  accent: 'limburg' | 'coral'
  label: string
}

function RentalList({ rentals }: { rentals: Rental[] }) {
  return (
    <div className="space-y-3">
      {rentals.map((r) => (
        <div key={r.name} className="flex items-start gap-2">
          <div>
            <a
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ink hover:text-terracotta inline-flex items-center gap-1"
            >
              {r.name}
              <ExternalLink size={13} className="text-muted" />
            </a>
            <p className="text-sm text-muted">{r.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

const tintStyles: Record<string, string> = {
  'limburg-tint': 'bg-limburg-tint',
  'coral-tint': 'bg-coral-tint',
}

const accentStyles: Record<string, string> = {
  limburg: 'text-limburg',
  coral: 'text-coral',
}

export default function Rentals({ id, heading, rentals, photo, photoAlt, tint, accent, label }: Props) {
  const ref = useFadeIn()

  return (
    <section id={id} ref={ref} className="section-fade max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <h2 className="font-heading text-3xl text-ink mb-8">{heading}</h2>

      <div className={`${tintStyles[tint]} rounded-lg overflow-hidden border border-sand max-w-2xl`}>
        <img src={base + photo} alt={photoAlt} className="w-full h-auto" loading="lazy" />
        <div className="p-6">
          <h3 className={`font-heading text-xl ${accentStyles[accent]} mb-4`}>{label}</h3>
          <RentalList rentals={rentals} />
        </div>
      </div>
    </section>
  )
}
