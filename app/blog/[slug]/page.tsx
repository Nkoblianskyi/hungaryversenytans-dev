import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/lib/blog-data'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: `${post.title} — Hungary Versenytáns`,
    description: post.excerpt,
  }
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <>
      {/* Article Header */}
      <div className="pt-32 pb-16 px-6 md:px-12 border-b border-border/30">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-8">
            <Link href="/blog" className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2">
              <span className="block w-4 h-px bg-current" />
              Blog
            </Link>
            <span className="text-border/60" aria-hidden="true">/</span>
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-primary border border-primary/40 px-2 py-0.5">{post.category}</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-light italic leading-tight text-balance text-foreground mb-8">
            {post.title}
          </h1>
          <div className="flex items-center gap-6">
            <span className="w-px h-4 bg-border/60" aria-hidden="true" />
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground">{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative h-72 md:h-[480px] overflow-hidden">
        <Image
          src={post.img}
          alt={post.title}
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-6 md:px-12 py-20">
        <p className="font-serif text-xl md:text-2xl italic text-foreground/80 leading-relaxed mb-12 text-balance">
          {post.excerpt}
        </p>

        <div className="flex flex-col gap-10">
          {post.content.map((block, i) => (
            <div key={i}>
              {block.heading && (
                <h2 className="font-serif text-3xl font-light italic text-foreground mb-5 text-balance">
                  {block.heading}
                </h2>
              )}
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">{block.body}</p>
            </div>
          ))}
        </div>

        {/* Article end ornament */}
        <div className="mt-16 flex items-center gap-4" aria-hidden="true">
          <div className="flex-1 h-px bg-border/30" />
          <span className="font-serif text-sm italic text-primary/40">·</span>
          <div className="flex-1 h-px bg-border/30" />
        </div>
      </article>

      {/* More posts */}
      <section className="py-20 px-6 md:px-12 border-t border-border/30 bg-secondary/20" aria-labelledby="more-posts-heading">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <h2 id="more-posts-heading" className="font-serif text-4xl font-light italic text-foreground">
              További cikkek
            </h2>
            <Link href="/blog" className="font-sans text-xs tracking-[0.2em] uppercase text-primary flex items-center gap-2 hover:gap-4 transition-all duration-300 group">
              <span className="block h-px w-6 bg-primary group-hover:w-10 transition-all duration-300" />
              Összes cikk
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {otherPosts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex flex-col">
                <div className="overflow-hidden mb-5">
                  <Image
                    src={p.img}
                    alt={p.title}
                    width={400}
                    height={260}
                    className="w-full h-44 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-primary/70 mb-2">{p.category}</span>
                <h3 className="font-serif text-xl font-light italic text-foreground leading-snug text-balance group-hover:text-primary transition-colors duration-300">
                  {p.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
