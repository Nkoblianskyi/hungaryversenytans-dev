import Image from 'next/image'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog-data'

export const metadata = {
  title: 'Blog — Hungary Versenytáns',
  description: 'Cikkek, elemzések és riportok a sportbáltánc világából.',
}

const categories = ['Mind', 'Standard táncok', 'Latin táncok', 'Tréning', 'Kultúra', 'Pszichológia', 'Riport']

export default function BlogPage() {
  const [featured, ...rest] = blogPosts

  return (
    <>
      {/* Page Header */}
      <div className="pt-32 pb-20 px-6 md:px-12 border-b border-border/30">
        <div className="max-w-4xl">
          <span className="font-sans text-xs tracking-[0.4em] uppercase text-primary block mb-6">Blog</span>
          <h1 className="font-serif text-6xl md:text-8xl font-light italic leading-none text-balance text-foreground mb-8">
            Cikkek<br />
            <span className="not-italic font-semibold text-primary">és elemzések</span>
          </h1>
          <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-2xl">
            Mélyreható riportok, technikai elemzések és a versenytánc kultúrájának bemutatása. Minden cikk a tánc iránt szenvedéllyel érdeklődőknek szól.
          </p>
        </div>
      </div>

      {/* Category filter (visual only) */}
      <nav className="border-b border-border/30 px-6 md:px-12 py-4 overflow-x-auto" aria-label="Kategóriák">
        <div className="flex gap-6 whitespace-nowrap">
          {categories.map((cat, i) => (
            <span
              key={cat}
              className={`font-sans text-xs tracking-[0.2em] uppercase cursor-default select-none transition-colors duration-300 ${
                i === 0 ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {cat}
            </span>
          ))}
        </div>
      </nav>

      {/* Featured post */}
      <section className="py-20 px-6 md:px-12 border-b border-border/30" aria-label="Kiemelt cikk">
        <div className="max-w-6xl mx-auto">
          <Link href={`/blog/${featured.slug}`} className="group grid md:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden">
              <Image
                src={featured.img}
                alt={featured.title}
                width={720}
                height={500}
                className="w-full h-72 md:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-primary border border-primary/40 px-2.5 py-1">{featured.category}</span>
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground">{featured.readTime}</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-light italic leading-snug text-balance text-foreground group-hover:text-primary transition-colors duration-300 mb-6">
                {featured.title}
              </h2>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-8">{featured.excerpt}</p>
              <div className="flex items-center gap-3 font-sans text-xs tracking-[0.25em] uppercase text-primary">
                <span className="block h-px w-8 bg-primary" />
                Elolvasom
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Rest of posts */}
      <section className="py-20 px-6 md:px-12" aria-label="Összes cikk">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col">
                <div className="overflow-hidden mb-6">
                  <Image
                    src={post.img}
                    alt={post.title}
                    width={480}
                    height={320}
                    className="w-full h-52 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-primary/70">{post.category}</span>
                  <span className="w-px h-3 bg-border/60" aria-hidden="true" />
                  
                </div>
                <h3 className="font-serif text-2xl font-light italic text-foreground mb-3 leading-snug text-balance group-hover:text-primary transition-colors duration-300 flex-1">
                  {post.title}
                </h3>
                <p className="font-sans text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-5">{post.excerpt}</p>
                <div className="flex items-center gap-2 font-sans text-[10px] tracking-[0.25em] uppercase text-primary mt-auto">
                  <span className="block h-px w-4 bg-primary" />
                  Elolvasom
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
