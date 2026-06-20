import { Car } from 'lucide-react'
import { useFadeIn } from './useFadeIn'

export default function Reservations() {
  const ref = useFadeIn()

  return (
    <section id="reservations" ref={ref} className="section-fade max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <h2 className="font-heading text-3xl text-ink mb-8">Reservations</h2>

      <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
        <div className="bg-limburg-tint border-l-4 border-limburg rounded-lg p-5">
          <div className="flex items-start gap-3">
            <Car className="text-limburg shrink-0 mt-0.5" size={22} />
            <div>
              <h3 className="font-heading text-lg text-ink leading-tight">Avis rental car</h3>
              <p className="text-sm text-muted italic mb-2">Jun 22 → Jun 26 · pick-up & drop-off AMS</p>
              <p className="text-sm text-ink">
                Schiphol Airport pick-up Monday, return Friday before the train into central Amsterdam.
              </p>
              <p className="text-sm text-ink mt-2">
                Confirmation <span className="font-mono text-ink">#18282990US5</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
