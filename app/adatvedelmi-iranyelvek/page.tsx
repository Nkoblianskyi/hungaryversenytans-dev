import Link from 'next/link'

export const metadata = {
  title: 'Adatvédelmi irányelvek — Hungary Versenytáns',
  description: 'Tájékoztató a hungaryversenytans.com adatkezelési és adatvédelmi elveiről.',
}

const sections = [
  {
    title: 'Az adatkezelő adatai',
    body: 'A hungaryversenytans.com weboldal üzemeltetője az adatkezelő. Elérhetőségünkre vonatkozó információkat a Rólunk oldalon talál. Az adatkezelő az Európai Unió Általános Adatvédelmi Rendeletének (GDPR, 2016/679/EU) megfelelően végzi az adatkezelési tevékenységét.',
  },
  {
    title: 'Milyen adatokat gyűjtünk?',
    body: 'A kapcsolatfelvételi űrlapon keresztül az Ön által önkéntesen megadott személyes adatokat (név, e-mail cím, az üzenet tartalma) rögzítjük. Ezen adatokat kizárólag az Ön által kezdeményezett kapcsolatfelvétel megválaszolásához használjuk fel. Egyéb személyes adatot nem gyűjtünk és nem tárolunk.',
  },
  {
    title: 'Az adatkezelés jogalapja',
    body: 'A kapcsolatfelvételi célból megadott adatok kezelésének jogalapja az Ön önkéntes hozzájárulása (GDPR 6. cikk (1) bekezdés a) pont). A hozzájárulást az Ön az űrlap elküldésekor a jelölőnégyzet bejelölésével adja meg, és azt bármikor visszavonhatja.',
  },
  {
    title: 'Az adatkezelés időtartama',
    body: 'A kapcsolatfelvételi üzeneteket és az ahhoz kapcsolódó személyes adatokat a válasz megküldését követő 30 napon belül töröljük, hacsak Ön hosszabb ideig tartó kapcsolattartáshoz nem járult hozzá. Hozzájárulása visszavonása esetén az adatokat haladéktalanul töröljük.',
  },
  {
    title: 'Az adatok továbbítása',
    body: 'Személyes adatait harmadik félnek nem adjuk át, kivéve, ha arra jogszabály kötelez bennünket. Adatait nem értékesítjük, nem adjuk bérbe, és nem tesszük hozzáférhetővé marketing célokra.',
  },
  {
    title: 'Az Ön jogai',
    body: 'Önnek joga van hozzáférni a tárolt adataihoz, kérni azok helyesbítését, törlését vagy az adatkezelés korlátozását. Joga van tiltakozni az adatkezelés ellen, és joga van az adathordozhatósághoz. Panasszal élhet a felügyeleti hatóságnál (Magyarországon: Nemzeti Adatvédelmi és Információszabadság Hatóság, naih.hu). Jogai gyakorlásához vegye fel velünk a kapcsolatot a Rólunk oldalon elérhető űrlapon.',
  },
  {
    title: 'Adatbiztonsági intézkedések',
    body: 'Minden tőlünk elvárható technikai és szervezési intézkedést megteszünk az adatok védelme érdekében. Weboldalunk HTTPS-kapcsolaton keresztül érhető el, amely titkosítja az Ön és a szerver közötti adatforgalmat.',
  },
  {
    title: 'Irányelvek módosítása',
    body: 'Fenntartjuk a jogot, hogy jelen adatvédelmi tájékoztatót bármikor módosítsuk. A változásokról az oldalon közzétett frissített verzióval tájékoztatjuk látogatóinkat. A módosított irányelvek a közzététel napjától lépnek hatályba.',
  },
]

export default function AdatvedelmiIranyelvekPage() {
  return (
    <>
      <div className="pt-32 pb-20 px-6 md:px-12 border-b border-border/30">
        <div className="max-w-3xl">
          <nav className="flex items-center gap-2 mb-8" aria-label="Navigációs breadcrumb">
            <Link href="/" className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300">Főoldal</Link>
            <span className="text-border/60 text-xs" aria-hidden="true">/</span>
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-foreground">Adatvédelmi irányelvek</span>
          </nav>
          <span className="font-sans text-xs tracking-[0.4em] uppercase text-primary block mb-6">Jogi tájékoztató</span>
          <h1 className="font-serif text-5xl md:text-7xl font-light italic leading-none text-balance text-foreground mb-6">
            Adatvédelmi irányelvek
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

        <div className="pt-10 border-t border-border/30 flex flex-col sm:flex-row gap-6 items-start">
          <Link href="/suti-iranyelvek" className="font-sans text-xs tracking-[0.25em] uppercase text-muted-foreground flex items-center gap-3 hover:text-primary transition-colors duration-300 group">
            <span className="block h-px w-6 bg-current" />
            Süti irányelvek
          </Link>
          <Link href="/rolunk" className="font-sans text-xs tracking-[0.25em] uppercase text-primary flex items-center gap-3 hover:gap-5 transition-all duration-300 group">
            <span className="block h-px w-8 bg-primary group-hover:w-12 transition-all duration-300" />
            Kapcsolatfelvétel
          </Link>
        </div>
      </div>
    </>
  )
}
