'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { cn } from '@/lib/utils'

function SuccessPopup({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Panel */}
      <div className="relative bg-card border border-border/60 p-10 md:p-14 max-w-md w-full text-center">
        {/* Ornament */}
        <div className="flex justify-center mb-8" aria-hidden="true">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="1" className="text-primary/40" />
            <path d="M14 24l7 7 13-14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
          </svg>
        </div>
        <h2 id="popup-title" className="font-serif text-4xl font-light italic text-foreground mb-4 text-balance">
          Üzenet elküldve
        </h2>
        <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-8">
          Köszönjük megkeresését. Munkatársaink hamarosan felveszik Önnel a kapcsolatot az üzenetben megadott elérhetőségen keresztül.
        </p>
        <button
          onClick={onClose}
          className="font-sans text-xs tracking-[0.25em] uppercase border border-primary text-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-full"
        >
          Bezárás
        </button>
      </div>
    </div>
  )
}

const teamMembers = [
  { name: 'Kovács András', role: 'Főszerkesztő', desc: 'Több mint 20 éve foglalkozik a sportbáltánc világával, versenyzőként és edzőként egyaránt.' },
  { name: 'Németh Petra', role: 'Tartalom és szerkesztés', desc: 'Táncpedagógus és kulturális újságíró, aki a technika és a táncos életmód kapcsolatát kutatja.' },
  { name: 'Varga Balázs', role: 'Technikai elemzés', desc: 'Volt versenyző, jelenleg edző és a hazai versenyszabályzat egyik szakértője.' },
]

const missionParagraphs = [
  'A Hungary Versenytáns platformja azzal a céllal jött létre, hogy minőségi, részletes és hiteles tartalmat nyújtson a sportbáltánc iránt érdeklődőknek. Hisszük, hogy ez a különleges sport megérdemli az alapos bemutatást: történelmének, technikájának és versenykultúrájának teljes körű feltérképezését.',
  'Munkánkban a sportbáltáncos közösség tapasztalt tagjaira támaszkodunk. Minden cikkünk és szakmai leírásunk szakemberek ellenőrzésén esett át. Célunk nem a szenzáció, hanem a mély megértés.',
  'Bármilyen kérdéssel, javaslattal vagy együttműködési lehetőséggel forduljon hozzánk az alábbi kapcsolatfelvételi űrlapon keresztül.',
]

export default function RolunkPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '', consent: false })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  function validate() {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'A név megadása kötelező.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Érvényes e-mail cím szükséges.'
    if (!form.message.trim() || form.message.trim().length < 20) e.message = 'Az üzenet legalább 20 karakter legyen.'
    if (!form.consent) e.consent = 'Az adatvédelmi tájékoztató elfogadása szükséges.'
    return e
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length > 0) {
      setErrors(e)
      return
    }
    setErrors({})
    setSubmitted(true)
  }

  function handleChange(field: string, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  return (
    <>
      {submitted && <SuccessPopup onClose={() => { setSubmitted(false); setForm({ name: '', email: '', message: '', consent: false }) }} />}

      {/* Page Header */}
      <div className="pt-32 pb-20 px-6 md:px-12 border-b border-border/30">
        <div className="max-w-4xl">
          <span className="font-sans text-xs tracking-[0.4em] uppercase text-primary block mb-6">Rólunk</span>
          <h1 className="font-serif text-6xl md:text-8xl font-light italic leading-none text-balance text-foreground mb-8">
            Kik<br />
            <span className="not-italic font-semibold text-primary">vagyunk</span><br />
            mi?
          </h1>
        </div>
      </div>

      {/* About image */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image src="/images/about.png" alt="A Hungary Versenytáns csapata" fill className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
      </div>

      {/* Mission */}
      <section className="py-24 px-6 md:px-12" aria-labelledby="mission-heading">
        <div className="max-w-3xl mx-auto">
          <span className="font-sans text-xs tracking-[0.35em] uppercase text-primary block mb-6">Küldetésünk</span>
          <h2 id="mission-heading" className="font-serif text-5xl md:text-6xl font-light italic text-foreground mb-12 text-balance">
            A szenvedély<br />és a tudás találkozása
          </h2>
          {missionParagraphs.map((p, i) => (
            <p key={i} className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">{p}</p>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 md:px-12 bg-secondary/20" aria-labelledby="team-heading">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="font-sans text-xs tracking-[0.35em] uppercase text-primary block mb-4">Csapat</span>
            <h2 id="team-heading" className="font-serif text-5xl font-light italic text-foreground">Mögöttünk állnak</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-border/30">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-background p-10 group hover:bg-secondary/40 transition-colors duration-300">
                <div className="w-10 h-px bg-primary/40 group-hover:w-16 transition-all duration-500 mb-8" aria-hidden="true" />
                <h3 className="font-serif text-2xl font-semibold italic text-foreground mb-1">{member.name}</h3>
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-primary mb-5">{member.role}</p>
                <p className="font-sans text-xs text-muted-foreground leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-24 md:py-36 px-6 md:px-12" aria-labelledby="contact-form-heading">
        <div className="max-w-3xl mx-auto">
          <div className="mb-14">
            <span className="font-sans text-xs tracking-[0.35em] uppercase text-primary block mb-4">Kapcsolat</span>
            <h2 id="contact-form-heading" className="font-serif text-5xl md:text-6xl font-light italic text-foreground mb-4 text-balance">
              Írjon nekünk
            </h2>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              Kérdéssel, javaslattal vagy együttműködési ajánlattal szívesen fogadjuk megkeresését.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
            {/* Name */}
            <div>
              <label htmlFor="name" className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-2">
                Teljes neve <span className="text-primary" aria-label="kötelező">*</span>
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className={cn(
                  'w-full bg-transparent border-b py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none transition-colors duration-300',
                  errors.name ? 'border-destructive focus:border-destructive' : 'border-border/50 focus:border-primary'
                )}
                placeholder="pl. Kovács Mária"
                aria-describedby={errors.name ? 'name-error' : undefined}
                aria-invalid={!!errors.name}
              />
              {errors.name && <p id="name-error" className="font-sans text-xs text-destructive mt-2" role="alert">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-2">
                E-mail cím <span className="text-primary" aria-label="kötelező">*</span>
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className={cn(
                  'w-full bg-transparent border-b py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none transition-colors duration-300',
                  errors.email ? 'border-destructive focus:border-destructive' : 'border-border/50 focus:border-primary'
                )}
                placeholder="nev@pelda.hu"
                aria-describedby={errors.email ? 'email-error' : undefined}
                aria-invalid={!!errors.email}
              />
              {errors.email && <p id="email-error" className="font-sans text-xs text-destructive mt-2" role="alert">{errors.email}</p>}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-2">
                Üzenete <span className="text-primary" aria-label="kötelező">*</span>
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => handleChange('message', e.target.value)}
                className={cn(
                  'w-full bg-transparent border-b py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none resize-none transition-colors duration-300',
                  errors.message ? 'border-destructive focus:border-destructive' : 'border-border/50 focus:border-primary'
                )}
                placeholder="Írja ide üzenetét..."
                aria-describedby={errors.message ? 'message-error' : undefined}
                aria-invalid={!!errors.message}
              />
              {errors.message && <p id="message-error" className="font-sans text-xs text-destructive mt-2" role="alert">{errors.message}</p>}
            </div>

            {/* Consent checkbox */}
            <div>
              <div className="flex items-start gap-4">
                <button
                  type="button"
                  role="checkbox"
                  aria-checked={form.consent}
                  aria-describedby={errors.consent ? 'consent-error' : 'consent-label'}
                  onClick={() => handleChange('consent', !form.consent)}
                  className={cn(
                    'mt-0.5 w-4 h-4 border shrink-0 flex items-center justify-center transition-colors duration-200',
                    form.consent ? 'border-primary bg-primary/10' : 'border-border/60 bg-transparent',
                    errors.consent ? 'border-destructive' : ''
                  )}
                >
                  {form.consent && (
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M1 4l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
                    </svg>
                  )}
                </button>
                <p id="consent-label" className="font-sans text-xs text-muted-foreground leading-relaxed">
                  Elolvastam és elfogadom az{' '}
                  <Link href="/adatvedelmi-iranyelvek" className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">
                    adatvédelmi tájékoztatót
                  </Link>
                  , és hozzájárulok adataim kezeléséhez a kapcsolatfelvétel céljából.{' '}
                  <span className="text-primary" aria-label="kötelező">*</span>
                </p>
              </div>
              {errors.consent && <p id="consent-error" className="font-sans text-xs text-destructive mt-2 ml-8" role="alert">{errors.consent}</p>}
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="font-sans text-xs tracking-[0.25em] uppercase border border-primary text-primary px-10 py-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Üzenet küldése
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
