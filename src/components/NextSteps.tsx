import { Check } from 'lucide-react'
import type { NextStep } from '../data/trip'
import { useFadeIn } from './useFadeIn'

interface Props {
  steps: NextStep[]
}

export default function NextSteps({ steps }: Props) {
  const ref = useFadeIn()

  return (
    <section id="next-steps" ref={ref} className="section-fade bg-sand/40 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-heading text-3xl text-ink mb-8">Next steps</h2>

        <div className="space-y-4">
          {steps.map((s) => (
            <div key={s.number} className="bg-white rounded-lg border border-sand p-6 flex items-center gap-5">
              {s.done ? (
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sage/40 text-limburg shrink-0">
                  <Check size={22} strokeWidth={3} />
                </span>
              ) : (
                <span className="font-heading text-4xl text-terracotta leading-none select-none w-10 text-center">
                  {s.number}
                </span>
              )}
              <h3 className={`font-heading text-lg ${s.done ? 'text-muted line-through' : 'text-ink'}`}>{s.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
