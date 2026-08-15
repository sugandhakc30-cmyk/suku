import type { Metadata, ResolvingMetadata } from 'next'
import type { ReactNode } from 'react'
import './styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { siteMeta } from '../lib/seo'
import JsonLd from '../components/JsonLd'

const meta = siteMeta()

export const metadata: Metadata = {
  metadataBase: new URL(meta.baseUrl),
  title: 'Sugandha Tech',
  description: 'Independent technology reviews and buying guidance for smarter purchase decisions.',
  alternates: {
    canonical: meta.baseUrl
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: 'Sugandha Tech',
    description: 'Independent technology reviews and buying guidance for smarter purchase decisions.',
    url: meta.baseUrl,
    siteName: 'Sugandha Tech',
    type: 'website'
  },
  icons: {
    icon: '/favicon.svg'
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const meta = siteMeta()
  return (
    <html lang="en">
      <body>
        {/* JSON-LD for Organization and WebSite */}
        <JsonLd />
        <div className="min-h-screen flex flex-col">
          <Header siteName={meta.siteName} />
          <main className="flex-1 w-full">
            <div className="container py-8">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}