import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Történelem — Hungary Versenytáns',
  description: 'A sportbáltánc magyarországi történelme a kezdetektől napjainkig.',
}

const timeline = [
  {
    period: '1900-as évek eleje',
    title: 'A bálkultúra születése',
    body: 'A 20. század hajnalán a nagy európai fővárosokban egyre inkább tért hódított a szervezett báltermi tánckultúra. Budapesten az arisztokrácia és a polgárság körében a keringő, a polka és a mazurka uralta a bálok parkettjét. Az első szabályrendszerek még lazák voltak, de a mozgás szépsége és a páros tánc elegáns formái egyre szélesebb közönséget vonzottak.',
  },
  {
    period: '1920-as évek',
    title: 'Az első versenyformák megjelenése',
    body: 'A két világháború közötti időszakban a szervezett versenytánc gondolata egyre erőteljesebben vetette fel magát. Londonban és Bécsben alakultak az első formális tánclisszékok és versenyrendszerek. Magyarországon is megjelentek az első tánciskolák, ahol nem csupán a szórakozás, hanem a versenyzés szelleme is jelen volt.',
  },
  {
    period: '1930–1940-es évek',
    title: 'A standard kategória megszilárdulása',
    body: 'A standard táncok szabályrendszere a harmincas évekre megszilárdult. A keringő, a tangó, a foxtrot és a quickstep koreografált mozgásmintái egységes versenykritériumokat kaptak. Magyarországon ebben az évtizedben tartották az első nyilvános versenytánc-bemutatókat, amelyek óriási közönségsikert arattak.',
  },
  {
    period: '1950–1960-as évek',
    title: 'Szervezeti keretek kialakulása',
    body: 'A háború utáni újjáépítés évtizedeiben a sportbáltánc Magyarországon is szervezett formát öltött. Megalakult az első országos szintű versenyrendszer, és a latin táncok is bekerültek a hazai versenyprogramba. Az ötvenes évek végén már rendszeres képzések és ranglisták működtek az egész országban.',
  },
  {
    period: '1970–1980-as évek',
    title: 'Nemzetközi áttörés',
    body: 'A hetvenes évektől Magyarország rendszeresen képviseltette magát a legrangosabb nemzetközi seregszemlék döntőiben. A hazai edzők és táncosok egyedülálló módszertant dolgoztak ki, amely a testtartás, az izomtónus és a partnerszinkron hármasságára épített. Ebben az időszakban születtek az első kiemelkedő hazai bajnokok.',
  },
  {
    period: '1990-es évek',
    title: 'A rendszerváltás utáni virágzás',
    body: 'A rendszerváltást követő évtized a sportbáltánc igazi aranykorát hozta el Magyarországon. A nyugati versenyrendszerekhez való csatlakozás és a szabad mozgás lehetősége új lendületet adott a hazai táncsportnak. Ebben az időszakban épült ki a jelenlegi szakmai infrastruktúra alapja, és a junior generáció is egyre komolyabb eredményeket mutatott fel.',
  },
  {
    period: '2000-es évektől napjainkig',
    title: 'Professzionalizálódás és digitális kor',
    body: 'A kétezres évektől a sportbáltánc Magyarországon teljes professzionalizálódáson ment át. A képzési rendszer akadémiai szintre emelkedett, és a hazai versenyzők rendszeresen szerepelnek a világ élmezőnyében. A digitális technológia bevonásával az edzésmódszerek és az elemzési technikák is forradalmasodtak.',
  },
]

export default function TortenetPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="pt-32 pb-20 px-6 md:px-12 border-b border-border/30">
        <div className="max-w-4xl">
          <span className="font-sans text-xs tracking-[0.4em] uppercase text-primary block mb-6">Történelem</span>
          <h1 className="font-serif text-6xl md:text-8xl font-light italic leading-none text-balance text-foreground mb-8">
            Száz év<br />
            <span className="not-italic font-semibold text-primary">elegancia</span><br />
            és versengés
          </h1>
          <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-2xl">
            A sportbáltánc magyarországi útja a 20. század eleji bálkultúrától a modern olimpiai törekvésekig ível. Ez az oldal bemutatja azt a hosszú és szenvedélyes utat, amelyet a hazai táncsport bejárt.
          </p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <Image src="/images/history-dance.png" alt="Történelmi versenytáncképek" fill className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background/80" />
        <div className="absolute inset-0 flex items-end px-6 md:px-12 pb-10">
          <p className="font-serif text-xl italic text-foreground/70 max-w-lg text-balance">
            &ldquo;A tánc az egyetlen művészet, amelynek eszköze maga az emberi lélek és teste.&rdquo;
          </p>
        </div>
      </div>

      {/* Timeline */}
      <section className="py-24 md:py-36 px-6 md:px-12" aria-label="Időszalag">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border/40 ml-[7px] hidden md:block" aria-hidden="true" />

            <div className="flex flex-col gap-0">
              {timeline.map((item, i) => (
                <div key={i} className="md:pl-12 relative group pb-16 last:pb-0">
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 w-3.5 h-3.5 border border-primary/60 bg-background group-hover:bg-primary/20 transition-colors duration-300 hidden md:block" aria-hidden="true" />
                  <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-primary block mb-3">{item.period}</span>
                  <h2 className="font-serif text-3xl md:text-4xl font-light italic text-foreground mb-5 text-balance">{item.title}</h2>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                  {i < timeline.length - 1 && (
                    <div className="mt-10 h-px w-12 bg-border/40 md:hidden" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA back */}
      <div className="border-t border-border/30 py-16 px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p className="font-sans text-sm text-muted-foreground">Folytatja a felfedezést a technika és tréning oldalán.</p>
        <Link href="/technika" className="font-sans text-xs tracking-[0.25em] uppercase text-primary flex items-center gap-3 hover:gap-5 transition-all duration-300 group">
          <span className="block h-px w-8 bg-primary group-hover:w-12 transition-all duration-300" />
          Tréning és technika
        </Link>
      </div>
    </>
  )
}
