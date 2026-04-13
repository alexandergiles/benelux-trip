import { useFadeIn } from './useFadeIn'

const stats = [
  { value: '9', label: 'days total' },
  { value: '2', label: 'home bases' },
  { value: '5', label: 'nights in Borgloon' },
  { value: '3', label: 'nights in Amsterdam' },
]

export default function AtAGlance() {
  const ref = useFadeIn()

  return (
    <section ref={ref} className="section-fade max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="border border-sand rounded-lg p-6 text-center bg-white">
            <div className="font-heading text-5xl text-terracotta mb-1">{s.value}</div>
            <div className="text-sm text-muted">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-sage/30 rounded-lg p-6 sm:p-8 text-base leading-relaxed text-ink">
        Land AMS Sunday → drive 1.5h south → 5 nights in a rental house near Borgloon, Belgium with
        day trips into the Netherlands & Germany → drive up Friday → 3 nights in Amsterdam → fly home Monday.
      </div>
    </section>
  )
}
