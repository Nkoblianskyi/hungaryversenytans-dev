import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Technika és Tréning — Hungary Versenytáns',
  description: 'Tréningtervek, edzési tippek és technikai alapok a versenytánc világából.',
}

const techniquePillars = [
  { num: '01', title: 'Testtartás és kontúr', desc: 'A versenytánc alapja a tökéletes testtartás. A gerinc egyenessége, a váll és csípő horizontális vonalai, valamint a kar- és kézpozíció meghatározza az összteljesítmény minőségét. A kontúr a pár által alkotott közös vizuális sziluett, amelyet mindkét fél testtartása együttesen formál.' },
  { num: '02', title: 'Lépéstechnika és súlylátás', desc: 'A lábak helyes kezelése, a sarok és talpélek megfelelő sorrendje, a súlyáthelyezés pontossága az alapvető technikai elemek közé tartozik. Minden tánclépés mögött precíz biomechanikai logika húzódik, amelyet a versenyzőknek tudatosan kell elsajátítaniuk.' },
  { num: '03', title: 'Partnerszinkron és kapcsolat', desc: 'A pártánc lelke a kapcsolat. A kéztartástól az oldalkarig terjedő kapcsolatrendszer biztosítja, hogy a két test egységként mozog. Ez az úgynevezett "frame", amely a standard táncokban ridgid, a latinban pedig dinamikusan változó formát ölt.' },
  { num: '04', title: 'Zeneiség és ritmusérzék', desc: 'A tánc soha nem válhat el a zenétől. A ritmusérzék fejlesztése, a zene frazírozásának értelmezése és a hangsúlyok kiaknázása a zenei érettség jelzői. A kiemelkedő versenyzők nem csupán a zenével táncolnak, hanem a zenét fejezik ki mozgással.' },
  { num: '05', title: 'Előadói karakter', desc: 'A technikai pontosság önmagában nem elég. A versenyzőnek karaktert, érzelmet és drámai feszültséget kell vinnie az előadásba. Ez különösen a latin táncokban hangsúlyos, ahol az egyéni kifejezőerő ugyanolyan pontokat ér, mint a lépéstechnika.' },
  { num: '06', title: 'Állóképesség és kondíció', desc: 'Egy versenynapon egy pár akár 5-8 fordulón is átvergődheti magát. Az ehhez szükséges aerob és anaerob állóképesség, valamint a gyors regenerációs képesség elengedhetetlen a csúcsteljesítményhez.' },
]

const trainingPlans = [
  {
    level: 'Kezdő',
    weeks: '12 hetes alapterv',
    sessions: 'Heti 3 edzés',
    focus: 'Lépésminták, alapritmus, párkapcsolat',
    items: [
      'Keringő alaplépés, természetes és ellentétes forog',
      'Foxtrot egyeneslépések és fordulatok',
      'Csípőtechnika alapjai a latin táncokhoz',
      'Zenei ritmusérzék fejlesztő gyakorlatok',
      'Testtartás kialakítása tükör előtt',
    ],
  },
  {
    level: 'Haladó',
    weeks: '16 hetes versenyterv',
    sessions: 'Heti 5 edzés',
    focus: 'Technikai precizitás, figurák, versenykarakter',
    items: [
      'Figurák mélyítése és összefüggő koreográfiaépítés',
      'Versenypontozás szempontjainak tudatos beépítése',
      'Latin tánc csípőmunkájának részletes kidolgozása',
      'Előadói karakter és színpadi jelenlét fejlesztése',
      'Kondicionális edzés: cardio és erőnlét',
    ],
  },
  {
    level: 'Versenyző',
    weeks: 'Éves versenyfelkészítés',
    sessions: 'Heti 6-7 edzés',
    focus: 'Versenycsúcs, mentális felkészítés, perfekcionism',
    items: [
      'Versenyspecifikus forgó- és haladásgyakorlatok',
      'Mentális edzés és versenydrukk kezelése',
      'Videóanalízis és önértékelési technikák',
      'Társ és edző visszajelzések szisztematikus feldolgozása',
      'Versenynap-szimuláció teljes körülmények közt',
    ],
  },
]

const tips = [
  { title: 'Melegítés fontossága', body: 'Soha ne kezdjen edzést alapos melegítés nélkül. A csukló, a boka és a gerinc mobilizálása csökkenti a sérülésveszélyt és javítja a mozgásminőséget.' },
  { title: 'Tükrös edzés', body: 'A tükör előtti edzés a versenytánc egyik legfontosabb eszköze. Tanuljon meg önmagát kívülről látni, de ne ragadjon bele a tükörbe, mert a valódi fókusz a parnerén és a zenén legyen.' },
  { title: 'Videóelemzés', body: 'Rögzítse az edzéseket és a versenyeket. A videóvisszanézés olyan részleteket tár fel, amelyeket edzés közben nem vesz észre. Vezessen edzésnaplót a fejlődés nyomon követéséhez.' },
  { title: 'Regeneráció', body: 'A fejlődés nem az edzésteremben, hanem a pihenő alatt történik. Az alvás, a nyújtás és az aktív regeneráció ugyanolyan fontos, mint a munka.' },
]

export default function TechnikaPage() {
  return (
    <>
      {/* Page Header */}
      <div className="pt-32 pb-20 px-6 md:px-12 border-b border-border/30">
        <div className="max-w-4xl">
          <span className="font-sans text-xs tracking-[0.4em] uppercase text-primary block mb-6">Technika</span>
          <h1 className="font-serif text-6xl md:text-8xl font-light italic leading-none text-balance text-foreground mb-8">
            Tréning,<br />
            <span className="not-italic font-semibold text-primary">technika</span><br />
            és mesterség
          </h1>
          <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-2xl">
            A sportbáltánc nem csupán elegáns mozgás, hanem precízen felépített technikai rendszer. Ezen az oldalon megtalálja az összes eszközt, amely a fejlődéshez szükséges.
          </p>
        </div>
      </div>

      {/* Hero visual */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image src="/images/technique-dance.png" alt="Tánctechnika" fill className="object-cover object-top" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
      </div>

      {/* Technique pillars */}
      <section className="py-24 px-6 md:px-12" aria-labelledby="pillars-heading">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="font-sans text-xs tracking-[0.35em] uppercase text-primary block mb-4">Alapelvek</span>
            <h2 id="pillars-heading" className="font-serif text-5xl md:text-6xl font-light italic text-foreground">A mesterség hat pillére</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/30">
            {techniquePillars.map((p) => (
              <div key={p.num} className="bg-background p-8 group hover:bg-secondary/40 transition-colors duration-300">
                <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-primary/50 block mb-4">{p.num}</span>
                <h3 className="font-serif text-2xl font-light italic text-foreground mb-4">{p.title}</h3>
                <p className="font-sans text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-6 h-px w-0 bg-primary group-hover:w-10 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training plans */}
      <section className="py-24 px-6 md:px-12 bg-secondary/20" aria-labelledby="plans-heading">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="font-sans text-xs tracking-[0.35em] uppercase text-primary block mb-4">Edzéstervek</span>
            <h2 id="plans-heading" className="font-serif text-5xl md:text-6xl font-light italic text-foreground">Szintekre szabott programok</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-border/30">
            {trainingPlans.map((plan) => (
              <div key={plan.level} className="bg-background p-8 flex flex-col">
                <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-primary block mb-2">{plan.level}</span>
                <h3 className="font-serif text-2xl font-light italic text-foreground mb-1">{plan.weeks}</h3>
                <p className="font-sans text-xs text-muted-foreground mb-1">{plan.sessions}</p>
                <p className="font-sans text-xs text-primary/70 italic mb-6">{plan.focus}</p>
                <ul className="flex flex-col gap-3 mt-auto">
                  {plan.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="block w-1 h-1 rounded-full bg-primary/60 mt-2 shrink-0" aria-hidden="true" />
                      <span className="font-sans text-xs text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-24 px-6 md:px-12" aria-labelledby="tips-heading">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="font-sans text-xs tracking-[0.35em] uppercase text-primary block mb-4">Tippek</span>
            <h2 id="tips-heading" className="font-serif text-5xl md:text-6xl font-light italic text-foreground">Profi tanácsok</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border/30">
            {tips.map((tip, i) => (
              <div key={i} className="bg-background p-10 relative group hover:bg-secondary/30 transition-colors duration-300">
                <span className="absolute top-6 right-8 font-serif text-6xl font-light text-primary/6 select-none pointer-events-none" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-2xl font-semibold text-primary mb-4">{tip.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{tip.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nav CTA */}
      <div className="border-t border-border/30 py-16 px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p className="font-sans text-sm text-muted-foreground">Ismerje meg a verseny szabályrendszerét is.</p>
        <Link href="/szabalyok" className="font-sans text-xs tracking-[0.25em] uppercase text-primary flex items-center gap-3 hover:gap-5 transition-all duration-300 group">
          <span className="block h-px w-8 bg-primary group-hover:w-12 transition-all duration-300" />
          Szabályok és előírások
        </Link>
      </div>
    </>
  )
}
