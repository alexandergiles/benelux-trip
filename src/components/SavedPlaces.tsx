import { MapPin, ExternalLink } from 'lucide-react'
import { useFadeIn } from './useFadeIn'

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/@/data=!3m1!4b1!4m2!11m1!2s1LSUYujfNi2GeC3p0C24TE6z1zPyuw?g_ep=CAISEjI2LjIyLjIuOTIxMTAxNzU3MBgAILffASpdLDk0Mjk3Njk5LDEwMDc5NDU0OCw5NDIzMTE4OCw5NDI4MDU2OCw0NzA3MTcwNCwxMDA4MDkyMDksOTQyMTg2NDEsOTQyODIxMzQsMTAwODEzNDY0LDk0Mjg2ODY5QgJVUw%3D%3D'

export default function SavedPlaces() {
  const ref = useFadeIn()

  return (
    <section id="places" ref={ref} className="section-fade max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <h2 className="font-heading text-3xl text-ink mb-8">Saved places</h2>

      <a
        href={GOOGLE_MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block max-w-3xl bg-sage/20 border border-sand rounded-lg p-6 sm:p-8 hover:bg-sage/30 transition-colors"
      >
        <div className="flex items-start gap-4">
          <div className="bg-white border border-sand rounded-lg p-3 shrink-0">
            <MapPin className="text-terracotta" size={28} />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-heading text-2xl text-ink">140 places</h3>
              <ExternalLink size={16} className="text-muted" />
            </div>
            <p className="text-sm text-muted italic mb-3">Google Maps · opens in a new tab</p>
            <p className="text-sm text-ink leading-relaxed">
              The running list — restaurants, cafés, playgrounds, viewpoints, and side-quests
              we've saved across Wallonie, the Netherlands, and the border towns. Lives on Google
              Maps so it stays interactive (search, directions, save to your own list) and works
              the same on mobile.
            </p>
          </div>
        </div>
      </a>
    </section>
  )
}
