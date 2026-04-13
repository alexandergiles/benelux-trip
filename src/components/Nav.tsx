import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Overview', href: '#overview' },
  { label: 'Route', href: '#route' },
  { label: 'Borgloon', href: '#limburg' },
  { label: 'Amsterdam', href: '#amsterdam' },
  { label: 'Rentals', href: '#rentals' },
  { label: 'Next steps', href: '#next-steps' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="no-print sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-sand">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        <span className="font-heading text-lg text-terracotta font-bold tracking-tight">NL 2026</span>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-muted"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-sand bg-white px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-2 text-sm text-muted hover:text-ink"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
