import { useFadeIn } from './useFadeIn'
import { base } from '../data/base'

export default function Hero() {
  const ref = useFadeIn()

  return (
    <section id="overview" ref={ref} className="section-fade">
      <div className="grid md:grid-cols-2 min-h-[380px]">
        {/* Left */}
        <div className="bg-terracotta text-white flex flex-col justify-center px-8 sm:px-12 py-12 md:py-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">Family Vaca 2026</h1>
          <ul className="space-y-2 text-white/85 text-base sm:text-lg">
            <li>Jun 21 — Fly from Washington, DC to Amsterdam, Netherlands</li>
            <li>Jun 21–26 — Countryside house near Borgloon, Belgium</li>
            <li>Jun 27–29 — Amsterdam, Netherlands</li>
            <li>Jun 29 — Fly home to Washington, DC</li>
          </ul>
        </div>

        {/* Right — hero image */}
        <div className="relative overflow-hidden min-h-[280px]">
          <img
            src={base + "photos/hero.jpg"}
            alt="The Giles family European vacation"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
