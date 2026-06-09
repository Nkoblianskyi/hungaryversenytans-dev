import Link from 'next/link'

export const metadata = {
  title: 'Szabályok és Előírások — Hungary Versenytáns',
  description: 'A sportbáltánc versenyének szabályrendszere, korcsoportok, pontozás és öltözeti előírások.',
}

const sections = [
  {
    id: 'korcsoportok',
    title: 'Korcsoportok és kategóriák',
    content: [
      { subtitle: 'Junior I.', text: 'A Junior I. kategória a 10-11 éves korosztályt foglalja magában. Ezen a szinten a hangsúly az alapkészségek megszilárdításán és a versenyélmény megismerésén van. A programban csak alap- és standard figurák szerepelhetnek.' },
      { subtitle: 'Junior II.', text: 'A Junior II. csoport a 12-13 éves versenyzőknek szól. Ebben a korcsoportban már a technikai pontosság és a páros harmónia is értékelési szempont. A standard és latin kategóriák egyaránt indíthatók.' },
      { subtitle: 'Ifjúság I. és II.', text: 'A 14-15, illetve 16-17 éves korosztály az Ifjúság kategóriákban indul. A technikai követelmények erősen emelkednek, és a versenydarabok hosszabb és összetettebb koreográfiából állnak.' },
      { subtitle: 'Felnőtt', text: 'A Felnőtt kategória 19 éves kortól indítható, felső korhatár nélkül. Ez a legmagasabb szintű versenyzési forma, ahol a vizsgabizottság a legszigorúbb technikai, zenei és előadói kritériumok szerint értékel.' },
      { subtitle: 'Szenior', text: 'Az 35 éves kor feletti versenyzők a Szenior kategóriákban versenyezhetnek, amelyet maga I., II. és III. al-csoportra osztanak a korosztályi egyensúly biztosítása érdekében.' },
    ],
  },
  {
    id: 'pontozas',
    title: 'Pontozás és értékelési rendszer',
    content: [
      { subtitle: 'A Skating-rendszer', text: 'A versenytáncban a Skating-rendszerként ismert pontozási módszer terjedt el a legtöbb szövetségnél. Ebben a rendszerben a bírók nem pontszámokat adnak, hanem rangsorolják a párokat fordulanként. A végeredmény statisztikai kalkuláció alapján alakul ki.' },
      { subtitle: 'Értékelési szempontok', text: 'A bírók technikai pontosság, musikalitás, előadói karakter, páros harmónia és koreográfiai összetettség szerint értékelnek. A standard táncokban a testtartás és a haladás irányának pontossága kiemelkedő szempont, a latin táncokban a csípőmunka és az egyéni kifejezőerő.' },
      { subtitle: 'Forduló és döntő rendszer', text: 'A versenyeket több fordulóból álló selejtező rendszer előzi meg. Az előfordulón, a negyeddöntőn és az elődöntőn az alsó felét zárják ki a mezőnynek. A döntőbe általában 6 pár jut, ahol a végső sorrendet a bírói testület közösen állapítja meg.' },
    ],
  },
  {
    id: 'oltozet',
    title: 'Öltözeti előírások',
    content: [
      { subtitle: 'Standard táncok', text: 'A férfiak fekete frakköltözékben, fekete cipőben versenyznek. A nők hosszú estélyi ruhában jelennek meg, amelynek anyaga és szoknyájának bősége a tánctechnikai követelményekhez kell igazodjon. A ékszerhasználat a szabálykönyvben meghatározott keretek között megengedett.' },
      { subtitle: 'Latin táncok', text: 'A latin kategóriában a nők rövid, testhez simuló ruhában versenyezhetnek, amely lehetővé teszi a csípő és a lábak szabad mozgását. A kristályos díszítés jellemző, de mértékét a szövetségi irányelvek szabályozzák. A férfiak szoros nadrágot és ingszerű felsőt viselnek.' },
      { subtitle: 'Korcsoportos eltérések', text: 'A juniorok és ifjúsági versenyzők öltözeti előírásai szigorúbbak. A rövid szoknyahossz, a mélyen kivágott ruhák és a hangsúlyos sminkelés junior kategóriákban tilos. Az elvárások fokozatosan oldódnak a felnőtt kategóriák felé haladva.' },
    ],
  },
  {
    id: 'versenyfolyamat',
    title: 'A verseny menete',
    content: [
      { subtitle: 'Regisztráció és rajtrend', text: 'A versenyzők a startnápokon keresztül kapják meg rajtnaplójukat és a versenykiírást. Minden körben meghatározott zenei sorrendben táncolnak, amelyet a rendező előzetesen közzétesz.' },
      { subtitle: 'Melegítő és zenehallgatás', text: 'A versenyzőknek lehetőségük van a zenék előzetes meghallgatására és korlátozott melegítési időre a pódium körül. A zenei sorrendet csak a rendező változtathatja meg technikai okok miatt.' },
      { subtitle: 'Zsűrizés és eredményhirdetés', text: 'A döntő befejezése után a bírói testület a Skating-rendszer szerint számítja a végeredményt. Az eredményhirdetés díjátadóval zárul, amelyen a legmagasabb helyezetteket emléktárggyal is jutalmazzák.' },
    ],
  },
  {
    id: 'fegyelem',
    title: 'Fegyelmi szabályok',
    content: [
      { subtitle: 'Versenymagatartás', text: 'A versenyzők és kísérőik kötelesek tartózkodni minden olyan magatartástól, amely más versenyző teljesítményét, a bírák munkáját vagy a rendezvény hangulatát negatívan befolyásolja. A versenypadlón udvariasság és kölcsönös tisztelet az elvárás.' },
      { subtitle: 'Diszkvalifikáció', text: 'A versenybíróság diszkvalifikálhatja a párokat, ha a pár öltözéke vagy mozgása sérti az előírásokat, ha a pár zavarást okoz más versenyzőknek, vagy ha az edzők és szurkolók nem tartják be a kijelölt tartózkodási zónákat.' },
      { subtitle: 'Fellebbezési jog', text: 'Minden versenyző jogosult a végeredménnyel szemben fellebbezést benyújtani a verseny lezárulásától számított meghatározott időn belül. A fellebbezést a szövetség bírói testülete bírálja el.' },
    ],
  },
]

export default function SzabalyokPage() {
  return (
    <>
      {/* Page Header */}
      <div className="pt-32 pb-20 px-6 md:px-12 border-b border-border/30">
        <div className="max-w-4xl">
          <span className="font-sans text-xs tracking-[0.4em] uppercase text-primary block mb-6">Szabályok</span>
          <h1 className="font-serif text-6xl md:text-8xl font-light italic leading-none text-balance text-foreground mb-8">
            A verseny<br />
            <span className="not-italic font-semibold text-primary">rendje</span><br />
            és szabályai
          </h1>
          <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-2xl">
            A sportbáltánc átgondolt és következetesen alkalmazott szabályrendszerre épül. Az alábbiakban összefoglalót talál a legfontosabb előírásokról, a korcsoportoktól az öltözeti irányelvekig.
          </p>
        </div>
      </div>

      {/* Anchor nav */}
      <nav className="border-b border-border/30 px-6 md:px-12 py-4 overflow-x-auto" aria-label="Fejezetek">
        <div className="flex gap-8 whitespace-nowrap">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300">
              {s.title}
            </a>
          ))}
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-20">
        {sections.map((section, si) => (
          <section key={section.id} id={section.id} className={`mb-20 ${si > 0 ? 'pt-8 border-t border-border/30' : ''}`} aria-labelledby={`heading-${section.id}`}>
            <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-primary block mb-4">{String(si + 1).padStart(2, '0')}</span>
            <h2 id={`heading-${section.id}`} className="font-serif text-4xl md:text-5xl font-light italic text-foreground mb-10 text-balance">{section.title}</h2>
            <div className="flex flex-col gap-8">
              {section.content.map((item, i) => (
                <div key={i} className="grid md:grid-cols-4 gap-4 md:gap-8">
                  <div className="md:col-span-1">
                    <h3 className="font-serif text-lg font-semibold italic text-primary">{item.subtitle}</h3>
                  </div>
                  <div className="md:col-span-3">
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <div className="border-t border-border/30 py-16 px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p className="font-sans text-sm text-muted-foreground">Kérdése van a szabályokkal kapcsolatban?</p>
        <Link href="/rolunk" className="font-sans text-xs tracking-[0.25em] uppercase text-primary flex items-center gap-3 hover:gap-5 transition-all duration-300 group">
          <span className="block h-px w-8 bg-primary group-hover:w-12 transition-all duration-300" />
          Lépjen kapcsolatba velünk
        </Link>
      </div>
    </>
  )
}
