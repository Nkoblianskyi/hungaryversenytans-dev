import Link from 'next/link'

const footerLinks = [
  { href: '/tortenet', label: 'Történelem' },
  { href: '/technika', label: 'Technika' },
  { href: '/szabalyok', label: 'Szabályok' },
  { href: '/blog', label: 'Blog' },
  { href: '/rolunk', label: 'Rólunk' },
  { href: '/suti-iranyelvek', label: 'Süti irányelvek' },
  { href: '/adatvedelmi-iranyelvek', label: 'Adatvédelmi irányelvek' },
]

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-background">
      <div className="px-6 md:px-12 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

        {/* Wordmark inline */}
        <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="Hungary Versenytáns">
          <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <ellipse cx="10" cy="18" rx="7" ry="3.5" stroke="currentColor" strokeWidth="1" className="text-primary" fill="none" />
            <ellipse cx="18" cy="10" rx="7" ry="3.5" stroke="currentColor" strokeWidth="1" className="text-primary" fill="none" transform="rotate(-45 18 10)" />
            <circle cx="14" cy="14" r="2" fill="currentColor" className="text-primary" />
          </svg>
          <span className="font-serif text-sm font-light tracking-[0.25em] uppercase text-muted-foreground">
            Hungary <span className="text-primary">Versenytáns</span>
          </span>
        </Link>

        {/* Links */}
        <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Lábléc navigáció">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <p className="font-sans text-xs tracking-widest uppercase text-muted-foreground/50 shrink-0">
          &copy; {new Date().getFullYear()} hungaryversenytans.com
        </p>
      </div>
    </footer>
  )
}
