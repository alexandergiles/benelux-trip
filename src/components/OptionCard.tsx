import { useState } from 'react'
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'
import type { ActivityOption } from '../data/trip'
import { base } from '../data/base'

interface Props {
  option: ActivityOption
  accentColor: 'limburg' | 'coral'
  tintColor: 'limburg-tint' | 'coral-tint'
}

const bgStyles: Record<string, string> = {
  'limburg-tint': 'bg-limburg-tint',
  'coral-tint': 'bg-coral-tint',
}

const borderStyles: Record<string, string> = {
  limburg: 'border-limburg',
  coral: 'border-coral',
}

const textStyles: Record<string, string> = {
  limburg: 'text-limburg',
  coral: 'text-coral',
}

export default function OptionCard({ option, accentColor, tintColor }: Props) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={`${bgStyles[tintColor]} border-l-4 ${borderStyles[accentColor]} rounded-lg overflow-hidden`}>
      {option.photo && (
        option.url ? (
          <a href={option.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${option.title} info in a new tab`}>
            <img
              src={base + option.photo}
              alt={option.photoAlt || option.title}
              className="w-full h-44 object-cover"
              style={option.photoPosition ? { objectPosition: option.photoPosition } : undefined}
              loading="lazy"
            />
          </a>
        ) : (
          <img
            src={base + option.photo}
            alt={option.photoAlt || option.title}
            className="w-full h-44 object-cover"
            style={option.photoPosition ? { objectPosition: option.photoPosition } : undefined}
            loading="lazy"
          />
        )
      )}
      <div className="p-5">
        <h3 className="font-heading text-lg text-ink mb-0.5">
          {option.url ? (
            <a
              href={option.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1 hover:underline ${textStyles[accentColor]}`}
            >
              {option.title}
              <ExternalLink size={14} className="opacity-60" />
            </a>
          ) : (
            option.title
          )}
        </h3>
        <p className="text-sm text-muted italic mb-2">{option.tag}</p>
        <p className="text-sm text-ink leading-relaxed">{option.body}</p>

        {option.expandable && option.details && (
          <>
            <button
              onClick={() => setExpanded(!expanded)}
              className={`mt-3 inline-flex items-center gap-1 text-sm font-medium ${textStyles[accentColor]} hover:underline cursor-pointer`}
            >
              {expanded ? 'Hide details' : 'See details'}
              {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
            {expanded && (
              <ul className="mt-3 space-y-2 text-sm text-ink">
                {option.details.map((d, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-muted select-none">&bull;</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </div>
  )
}
