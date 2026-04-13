import { ExternalLink } from 'lucide-react'
import type { Rental } from '../data/trip'
import { useFadeIn } from './useFadeIn'
import { base } from '../data/base'

interface Props {
  limburg: Rental[]
  amsterdam: Rental[]
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

export default function Rentals({ limburg, amsterdam }: Props) {
  const ref = useFadeIn()

  return (
    <section id="rentals" ref={ref} className="section-fade max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <h2 className="font-heading text-3xl text-ink mb-1">Rental starting points</h2>
      <p className="text-muted mb-8">Search links to get you going — not final picks.</p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-limburg-tint rounded-lg overflow-hidden border border-sand">
          <img src={base + "photos/rental-borgloon.jpg"} alt="Borgloon rental house" className="w-full h-48 object-cover" loading="lazy" />
          <div className="p-6">
            <h3 className="font-heading text-xl text-limburg mb-4">Borgloon house</h3>
            <RentalList rentals={limburg} />
          </div>
        </div>
        <div className="bg-coral-tint rounded-lg overflow-hidden border border-sand">
          <img src={base + "photos/rental-amsterdam.jpg"} alt="Amsterdam apartment" className="w-full h-48 object-cover" loading="lazy" />
          <div className="p-6">
            <h3 className="font-heading text-xl text-coral mb-4">Amsterdam apartment</h3>
            <RentalList rentals={amsterdam} />
          </div>
        </div>
      </div>
    </section>
  )
}
