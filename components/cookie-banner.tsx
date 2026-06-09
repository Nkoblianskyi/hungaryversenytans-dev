'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  function accept() {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  return (
    <div
      role="dialog"
      aria-label="Cookie hozzájárulás"
      className={cn(
        'fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-sm z-50 transition-all duration-500',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      )}
    >
      <div className="bg-card border border-border/60 p-6 backdrop-blur-xl">
        <p className="font-sans text-xs text-muted-foreground leading-relaxed mb-4">
          Az oldal sütiket használ a felhasználói élmény javítása érdekében. Részletekért tekintse meg{' '}
          <Link href="/suti-iranyelvek" className="text-primary underline underline-offset-2 hover:text-primary/80">
            sütiszabályzatunkat
          </Link>{' '}
          és{' '}
          <Link href="/adatvedelmi-iranyelvek" className="text-primary underline underline-offset-2 hover:text-primary/80">
            adatvédelmi tájékoztatónkat
          </Link>
          .
        </p>
        <div className="flex gap-3">
          <button
            onClick={accept}
            className="flex-1 font-sans text-xs tracking-[0.15em] uppercase bg-primary text-primary-foreground px-4 py-2.5 hover:bg-primary/90 transition-colors duration-200"
          >
            Elfogad
          </button>
          <button
            onClick={decline}
            className="flex-1 font-sans text-xs tracking-[0.15em] uppercase border border-border text-muted-foreground px-4 py-2.5 hover:border-primary hover:text-primary transition-colors duration-200"
          >
            Elutasít
          </button>
        </div>
      </div>
    </div>
  )
}
