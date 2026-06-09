import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Hungary Versenytáns — Sportbáltánc',
  description:
    'A sportbáltánc világa Magyarországon. Történelem, technika, versenyeredmények és a tánc szenvedélye.',
  keywords: 'sportbáltánc, versenytánc, Magyarország, tánc, bálterem',
  openGraph: {
    title: 'Hungary Versenytáns',
    description: 'A sportbáltánc világa Magyarországon.',
    url: 'https://hungaryversenytans.com',
    siteName: 'Hungary Versenytáns',
    locale: 'hu_HU',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu" className={`${cormorant.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
