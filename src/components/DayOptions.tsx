import type { ReactNode } from 'react'
import OptionCard from './OptionCard'
import type { ActivityOption } from '../data/trip'
import { useFadeIn } from './useFadeIn'

interface Props {
  id: string
  heading: string
  subtitle: string
  options: ActivityOption[]
  accentColor: 'limburg' | 'coral'
  tintColor: 'limburg-tint' | 'coral-tint'
  columns: number
  footer: string
  children?: ReactNode
}

export default function DayOptions({ id, heading, subtitle, options, accentColor, tintColor, columns, footer, children }: Props) {
  const ref = useFadeIn()

  const gridClass = columns === 4
    ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4'
    : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'

  return (
    <section id={id} ref={ref} className="section-fade max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <h2 className="font-heading text-3xl text-ink mb-1">{heading}</h2>
      <p className="text-muted mb-8">{subtitle}</p>

      <div className={gridClass}>
        {options.map((opt) => (
          <OptionCard key={opt.title} option={opt} accentColor={accentColor} tintColor={tintColor} />
        ))}
      </div>

      {children}

      <p className="text-sm text-muted italic mt-6">{footer}</p>
    </section>
  )
}
