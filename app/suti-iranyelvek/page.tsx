import Link from 'next/link'

export const metadata = {
  title: 'Süti irányelvek — Hungary Versenytáns',
  description: 'Tájékoztató a hungaryversenytans.com weboldalon alkalmazott sütikről és azok kezeléséről.',
}

const sections = [
  {
    title: 'Mi az a süti?',
    body: 'A sütik (cookie-k) kis adatfájlok, amelyeket az Ön böngészője tárol az Ön számítógépén vagy mobileszközén, amikor weboldalakat látogat meg. A sütik lehetővé teszik a weboldal számára, hogy felismerje az Ön eszközét, és bizonyos beállításokat megjegyezzen a következő látogatásra.',
  },
  {
    title: 'Milyen sütiket használunk?',
    body: 'Weboldalunk kizárólag funkcionális sütiket alkalmaz, amelyek az oldal megfelelő működéséhez szükségesek. Ezek a sütik ideiglenesen tárolják az Ön böngészési beállításait, például a cookie-hozzájárulás tényét. Nem alkalmazunk marketing célú, nyomkövető vagy harmadik fél által elhelyezett analitikai sütiket.',
  },
  {
    title: 'Hogyan kezeljük a sütiket?',
    body: 'A weboldalon való első látogatáskor tájékoztatjuk Önt a sütik alkalmazásáról, és lehetőséget adunk azok elfogadására vagy elutasítására. Az Ön döntését a böngésző helyi tárolójában (localStorage) rögzítjük. A hozzájárulása bármikor visszavonható a böngészője beállításaiban a sütik törlésével.',
  },
  {
    title: 'Hogyan tilthatja le a sütiket?',
    body: 'Bármely modern böngészőben lehetősége van a sütik letiltására, törlésére vagy a figyelmeztetések bekapcsolására. A sütik letiltása esetén az oldal bizonyos funkciói esetleg nem megfelelően működnek. A leggyakoribb böngészők (Chrome, Firefox, Safari, Edge) beállítási lehetőségeit az adott böngésző súgójában találja.',
  },
  {
    title: 'Kapcsolat',
    body: 'Ha kérdése merül fel a sütik alkalmazásával kapcsolatban, vegye fel velünk a kapcsolatot a Rólunk oldalon elérhető kapcsolatfelvételi űrlapon keresztül.',
  },
]

export default function SutiIranyelvekPage() {
  return (
    <>
      <div className="pt-32 pb-20 px-6 md:px-12 border-b border-border/30">
        <div className="max-w-3xl">
          <nav className="flex items-center gap-2 mb-8" aria-label="Navigációs breadcrumb">
            <Link href="/" className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300">Főoldal</Link>
            <span className="text-border/60 text-xs" aria-hidden="true">/</span>
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-foreground">Süti irányelvek</span>
          </nav>
          <span className="font-sans text-xs tracking-[0.4em] uppercase text-primary block mb-6">Jogi tájékoztató</span>
          <h1 className="font-serif text-5xl md:text-7xl font-light italic leading-none text-balance text-foreground mb-6">
            Süti irányelvek
          </h1>
          <p className="font-sans text-xs tracking-[0.15em] text-muted-foreground">Utoljára frissítve: 2026.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-12 py-20 flex flex-col gap-12">
        {sections.map((section, i) => (
          <section key={i} className={i > 0 ? 'pt-10 border-t border-border/30' : ''}>
            <h2 className="font-serif text-3xl font-light italic text-foreground mb-5">{section.title}</h2>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">{section.body}</p>
          </section>
        ))}

        <div className="pt-10 border-t border-border/30">
          <Link href="/rolunk" className="font-sans text-xs tracking-[0.25em] uppercase text-primary flex items-center gap-3 hover:gap-5 transition-all duration-300 group w-fit">
            <span className="block h-px w-8 bg-primary group-hover:w-12 transition-all duration-300" />
            Kapcsolatfelvétel
          </Link>
        </div>
      </div>
    </>
  )
}
