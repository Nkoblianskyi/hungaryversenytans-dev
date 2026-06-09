'use client'

import Link from 'next/link'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Főoldal' },
  { href: '/tortenet', label: 'Történelem' },
  { href: '/technika', label: 'Technika' },
  { href: '/szabalyok', label: 'Szabályok' },
  { href: '/blog', label: 'Blog' },
  { href: '/rolunk', label: 'Rólunk' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-normal">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md border-b border-border/40" />
      <div className="relative flex items-center justify-between px-6 md:px-12 h-16">
        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Hungary Versenytáns főoldal">
          {/* SVG Logo mark */}
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <ellipse cx="10" cy="18" rx="7" ry="3.5" stroke="currentColor" strokeWidth="1" className="text-primary" fill="none" />
            <ellipse cx="18" cy="10" rx="7" ry="3.5" stroke="currentColor" strokeWidth="1" className="text-primary" fill="none" transform="rotate(-45 18 10)" />
            <circle cx="14" cy="14" r="2" fill="currentColor" className="text-primary" />
          </svg>
          <div className="flex flex-col leading-none">
            <span className="font-serif text-base font-semibold tracking-[0.15em] uppercase text-foreground">
              Hungary
            </span>
            <span className="font-serif text-xs font-light tracking-[0.35em] uppercase text-primary">
              Versenytáns
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Főmenü">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-xs font-light tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Menü bezárása' : 'Menü megnyitása'}
          aria-expanded={open}
        >
          <span className={cn('block h-px w-6 bg-current transition-all duration-300', open && 'rotate-45 translate-y-2')} />
          <span className={cn('block h-px w-4 bg-current transition-all duration-300 self-end', open && 'opacity-0')} />
          <span className={cn('block h-px w-6 bg-current transition-all duration-300', open && '-rotate-45 -translate-y-2')} />
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={cn(
        'md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/40 transition-all duration-500 overflow-hidden',
        open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      )}>
        <nav className="flex flex-col px-6 py-8 gap-6" aria-label="Mobil menü">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-serif text-2xl font-light italic text-foreground hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
