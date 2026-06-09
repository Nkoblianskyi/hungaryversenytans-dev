import Image from 'next/image'
import Link from 'next/link'

const danceStyles = [
  { name: 'Keringő', subtitle: 'Standard', desc: 'A lassú keringő a sportbáltánc legelegánsabb mozgásformája, hosszú lebegő lépésekkel és lágy rotációkkal.', num: '01' },
  { name: 'Tangó', subtitle: 'Standard', desc: 'A tangó szenvedélyes, szaggatott karaktere és mélyen jellegzetes testtartása egyedülálló helyet foglal el a versenytánc palettáján.', num: '02' },
  { name: 'Foxtrot', subtitle: 'Standard', desc: 'A foxtrot folyékony természetes mozgásával és sima haladásával a legszofisztikáltabb standard tánc.', num: '03' },
  { name: 'Cha-cha-cha', subtitle: 'Latin', desc: 'A cha-cha-cha gyors, izgalmas ritmusú latin tánc, amelyet a csípő dinamikus mozdulata és játékos karaktere jellemez.', num: '04' },
  { name: 'Samba', subtitle: 'Latin', desc: 'A samba a brazil karnevál lelkületét hozza a versenypadlóra, pattogó ritmusával és lendületes mozgásával.', num: '05' },
  { name: 'Paso Doble', subtitle: 'Latin', desc: 'A paso doble a spanyol bikaviadalok dramaturgiájára épít, büszke testtartással és teatrális kifejezőerővel.', num: '06' },
]

const achievements = [
  { year: '2023', title: 'Európa-bajnokság', desc: 'Magyar pár döntőbe jutott a felnőtt standard kategóriában.' },
  { year: '2022', title: 'Közép-európai Kupa', desc: 'Arany és ezüst érem a latin táncok szenior divíziójában.' },
  { year: '2021', title: 'Világ Rangsor', desc: 'Rekordszámú magyar versenyző a világranglistán.' },
  { year: '2019', title: 'Ifjúsági VB', desc: 'Első helyezés a junior latin összetettben.' },
]

const blogPreviews = [
  { slug: 'a-keringorol', title: 'A keringő titkai: miért hódít a ballroom világa', excerpt: 'A lassú keringő nem pusztán tánc, hanem mozgásban megtestesült költészet. Fedezze fel, hogyan vált a sportbáltánc korunk egyik legszenvedélyesebb versenyszámává.', img: '/images/blog-1.png' },
  { slug: 'verseny-elokeszites', title: 'Versenyfelkészítés: a profi táncos mindennapjai', excerpt: 'Hogyan néz ki egy versenyző heti edzésprogramja? Milyen mentális felkészítés szükséges a nagy seregszemlékre?', img: '/images/blog-2.png' },
  { slug: 'kosztum-szerepe', title: 'A jelmez szerepe a versenytáncban', excerpt: 'A versenyruha nem csupán esztétikai elem, hanem a mozgás, a karakter és a kifejezés eszköze. Miért ennyire fontos a kosztüm a pontozásban?', img: '/images/blog-3.png' },
]

const equipmentFacts = [
  { title: 'Tánccipő', fact: 'A professzionális versenycipők talpa szuede bőrből készül, amely pontosan szabályozza a csúszást és a tapadást a parketten.' },
  { title: 'Pódium felülete', fact: 'A versenypadló speciális, rugalmas alapú parkettből épül fel, amely csökkenti az ízületi terhelést hosszú versenyek alatt.' },
  { title: 'Versenyruha', fact: 'A latin kategóriás versenyruhákon akár 10 000 kristálykövet is felhordhat a jelmezkészítő kézzel, egyenként rögzítve.' },
  { title: 'Zene', fact: 'A versenyeken minden táncstílushoz szabályozott tempójú zenemű szól, amelynek bpm-értékét a nemzetközi szövetség írja elő.' },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden" aria-label="Főkép">
        <Image src="/images/hero-dance.png" alt="Elegáns sporttáncos pár keringőben" fill priority className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute top-1/3 right-16 w-px h-48 bg-primary/30 rotate-12 hidden lg:block" />
        <div className="relative z-10 px-6 md:px-12 pb-16 md:pb-28 w-full">
          <div className="max-w-4xl">
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-primary mb-6">Sportbáltánc &nbsp;·&nbsp; Magyarország</p>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-[108px] font-light italic leading-none text-balance text-foreground mb-8">
              A mozgás<br />
              <span className="not-italic font-semibold text-primary">művészete</span><br />
              és sportja
            </h1>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link href="/tortenet" className="font-sans text-xs tracking-[0.25em] uppercase border border-primary text-primary px-8 py-3.5 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Fedezze fel
              </Link>
              <Link href="/technika" className="font-sans text-xs tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-2">
                <span className="block w-8 h-px bg-current" />
                Tréning és technika
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 md:right-12 flex flex-col items-center gap-2 opacity-40" aria-hidden="true">
          <div className="w-px h-12 bg-foreground/60" />
          <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-foreground writing-mode-vertical" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-border/40 py-4 overflow-hidden bg-secondary/30" aria-hidden="true">
        <div className="flex animate-marquee whitespace-nowrap">
          {['Sportbáltánc', 'Standard', 'Latin', 'Versenytánc', 'Magyarország', 'Technika', 'Elegancia', 'Mozgás', 'Sportbáltánc', 'Standard', 'Latin', 'Versenytánc', 'Magyarország', 'Technika', 'Elegancia', 'Mozgás'].map((item, i) => (
            <span key={i} className="font-serif text-sm italic text-muted-foreground mx-8">
              {item} <span className="text-primary mx-3">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* HISTORY PREVIEW */}
      <section className="py-24 md:py-36 px-6 md:px-12" aria-labelledby="history-heading">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-sans text-xs tracking-[0.35em] uppercase text-primary block mb-6">Történelem</span>
            <h2 id="history-heading" className="font-serif text-5xl md:text-6xl font-light italic leading-tight text-balance text-foreground mb-8">
              Száz év elegancia és versengés
            </h2>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">
              A sportbáltánc Magyarországon több mint egy évszázados hagyományra tekint vissza. A 20. század elején az európai bálkultúrából kinövő versenyformák hamar lelkes követőkre találtak a Kárpát-medencében.
            </p>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-10">
              Az ötvenes évektől a hazai versenyrendszer fokozatosan szervezettebbé vált, és Magyarország már a hetvenes évektől rendszeresen képviseltette magát a legrangosabb nemzetközi seregszemlék döntőiben.
            </p>
            <Link href="/tortenet" className="font-sans text-xs tracking-[0.25em] uppercase text-primary flex items-center gap-3 hover:gap-5 transition-all duration-300 group w-fit">
              <span className="block h-px w-8 bg-primary group-hover:w-12 transition-all duration-300" />
              Teljes történelem
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border border-primary/20 pointer-events-none" />
            <Image src="/images/history-dance.png" alt="Történelmi báltermi versenyképek" width={600} height={480} className="w-full h-80 object-cover object-center" />
          </div>
        </div>
      </section>

      {/* DANCE STYLES */}
      <section className="py-24 px-6 md:px-12 bg-secondary/20" aria-labelledby="styles-heading">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <span className="font-sans text-xs tracking-[0.35em] uppercase text-primary block mb-4">Stílusok</span>
              <h2 id="styles-heading" className="font-serif text-5xl md:text-6xl font-light italic text-foreground">A verseny kategóriái</h2>
            </div>
            <p className="font-sans text-sm text-muted-foreground max-w-xs leading-relaxed">A sportbáltánc két fő ágon fejlődött ki, mindkettő önálló karakterrel és szabályrendszerrel.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/30">
            {danceStyles.map((style) => (
              <div key={style.name} className="bg-background p-8 group hover:bg-secondary/40 transition-colors duration-300">
                <div className="flex items-start justify-between mb-6">
                  <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-primary/50">{style.num}</span>
                  <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground border border-border/60 px-2 py-0.5">{style.subtitle}</span>
                </div>
                <h3 className="font-serif text-3xl font-light italic text-foreground mb-4">{style.name}</h3>
                <p className="font-sans text-xs text-muted-foreground leading-relaxed">{style.desc}</p>
                <div className="mt-6 h-px w-0 bg-primary group-hover:w-12 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="py-24 md:py-36 px-6 md:px-12" aria-labelledby="achievements-heading">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="font-sans text-xs tracking-[0.35em] uppercase text-primary block mb-6">Eredmények</span>
            <h2 id="achievements-heading" className="font-serif text-5xl md:text-6xl font-light italic leading-tight text-balance text-foreground mb-6">
              Magyarország a világ táncpadlóján
            </h2>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-10">
              A hazai sportbáltánc kiváló eredményeket ért el a legjelentősebb nemzetközi versenyeken. Ezek a teljesítmények az edzők és táncosok generációinak munkáját tükrözik.
            </p>
            <div className="relative overflow-hidden">
              <Image src="/images/achievements.png" alt="Bajnoki díjak és érmek" width={480} height={300} className="w-full h-56 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
            </div>
          </div>
          <div className="flex flex-col">
            {achievements.map((item, i) => (
              <div key={i} className="border-b border-border/40 py-8 group">
                <div className="flex items-start gap-8">
                  <span className="font-serif text-4xl font-light text-primary/30 shrink-0 group-hover:text-primary transition-colors duration-300">{item.year}</span>
                  <div>
                    <h3 className="font-serif text-2xl font-light italic text-foreground mb-2">{item.title}</h3>
                    <p className="font-sans text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNIQUE PREVIEW */}
      <section className="py-24 md:py-36 bg-secondary/20" aria-labelledby="technique-heading">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <Image src="/images/technique-dance.png" alt="Tánctechnika és cipők" width={480} height={600} className="w-full h-96 md:h-[480px] object-cover object-center" />
          </div>
          <div className="md:col-span-3">
            <span className="font-sans text-xs tracking-[0.35em] uppercase text-primary block mb-6">Technika</span>
            <h2 id="technique-heading" className="font-serif text-5xl md:text-6xl font-light italic leading-tight text-balance text-foreground mb-8">
              Tréning, taktika és a mesterség titkai
            </h2>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">
              A sportbáltánc komoly atlétikai felkészülést igényel. A testtartástól a lépéstechnikán át a partnerszinkronig minden részlet kidolgozott rendszer szerint épül fel.
            </p>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-10">
              Edzéstervek, alapgyakorlatok, mentális felkészítés és versenyspecifikus taktikák a legjobb hazai szakemberektől.
            </p>
            <Link href="/technika" className="font-sans text-xs tracking-[0.25em] uppercase text-primary flex items-center gap-3 hover:gap-5 transition-all duration-300 group w-fit">
              <span className="block h-px w-8 bg-primary group-hover:w-12 transition-all duration-300" />
              Edzéstervek és tippek
            </Link>
          </div>
        </div>
      </section>

      {/* EQUIPMENT & FACTS */}
      <section className="py-24 md:py-36 px-6 md:px-12" aria-labelledby="equipment-heading">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <span className="font-sans text-xs tracking-[0.35em] uppercase text-primary block mb-4">Felszerelés</span>
            <h2 id="equipment-heading" className="font-serif text-5xl md:text-6xl font-light italic text-foreground mb-4">Felszerelés és különleges tények</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border/30 mb-6">
            {equipmentFacts.map((item, i) => (
              <div key={i} className="bg-background p-10 md:p-12 relative overflow-hidden group hover:bg-secondary/30 transition-colors duration-300">
                <span className="absolute top-6 right-8 font-serif text-7xl font-light text-primary/6 select-none pointer-events-none" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-2xl font-semibold text-primary mb-4">{item.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed relative z-10">{item.fact}</p>
              </div>
            ))}
          </div>
          <div className="relative overflow-hidden">
            <Image src="/images/equipment.png" alt="Versenytánc cipők" width={1200} height={300} className="w-full h-44 object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-secondary/20" aria-labelledby="blog-heading">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <span className="font-sans text-xs tracking-[0.35em] uppercase text-primary block mb-4">Blog</span>
              <h2 id="blog-heading" className="font-serif text-5xl md:text-6xl font-light italic text-foreground">Cikkek és elemzések</h2>
            </div>
            <Link href="/blog" className="font-sans text-xs tracking-[0.25em] uppercase text-primary flex items-center gap-3 hover:gap-5 transition-all duration-300 group">
              <span className="block h-px w-8 bg-primary group-hover:w-12 transition-all duration-300" />
              Összes cikk
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {blogPreviews.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <div className="overflow-hidden mb-6">
                  <Image src={post.img} alt={post.title} width={400} height={280} className="w-full h-56 object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="font-serif text-xl font-light italic text-foreground mb-3 leading-snug text-balance group-hover:text-primary transition-colors duration-300">{post.title}</h3>
                <p className="font-sans text-xs text-muted-foreground leading-relaxed line-clamp-3">{post.excerpt}</p>
                <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-primary mt-4 inline-flex items-center gap-2">
                  <span className="block h-px w-4 bg-primary" />Elolvasom
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RULES PREVIEW */}
      <section className="py-24 md:py-36 px-6 md:px-12" aria-labelledby="rules-heading">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-sans text-xs tracking-[0.35em] uppercase text-primary block mb-6">Szabályok</span>
            <h2 id="rules-heading" className="font-serif text-5xl md:text-6xl font-light italic leading-tight text-balance text-foreground mb-8">
              Játékszabályok és versenyfegyelmi előírások
            </h2>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">
              A sportbáltánc szigorú és átgondolt szabályrendszerre épül. A verseny menetét, az értékelési szempontokat és az öltözeti előírásokat pontos normák rögzítik.
            </p>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-10">
              A különböző korosztályok és kategóriák eltérő követelményrendszer szerint mérettetnek meg, amelyet a szövetségi irányelvek határoznak meg.
            </p>
            <Link href="/szabalyok" className="font-sans text-xs tracking-[0.25em] uppercase border border-primary text-primary px-8 py-3.5 inline-block hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              Teljes szabályzat
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-px bg-border/30">
            {['Korcsoportok', 'Kategóriák', 'Pontozás', 'Öltözeti előírások', 'Verseny menet', 'Fegyelmi szabályok'].map((item, i) => (
              <div key={i} className="bg-background p-6 hover:bg-secondary/40 transition-colors duration-300">
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-primary/40 block mb-2">{String(i + 1).padStart(2, '0')}</span>
                <p className="font-serif text-lg font-light italic text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-secondary/20" aria-labelledby="contact-heading">
        <div className="max-w-2xl mx-auto text-center">
          <span className="font-sans text-xs tracking-[0.35em] uppercase text-primary block mb-6">Kapcsolat</span>
          <h2 id="contact-heading" className="font-serif text-5xl md:text-6xl font-light italic text-balance text-foreground mb-4">
            Vegye fel velünk a kapcsolatot
          </h2>
          <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-10">
            Kérdése van a sportbáltánccal kapcsolatban? Írjon nekünk.
          </p>
          <Link href="/rolunk" className="font-sans text-xs tracking-[0.25em] uppercase border border-primary text-primary px-10 py-4 inline-block hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            Kapcsolatfelvétel
          </Link>
        </div>
      </section>
    </>
  )
}
