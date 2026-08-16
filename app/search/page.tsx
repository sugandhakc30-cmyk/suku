import type { Metadata } from 'next'
import SearchPageClient from '../../components/SearchPageClient'
import { siteMeta } from '../../lib/seo'

export const metadata: Metadata = {
  title: 'Search — Sugandha Tech',
  description: 'Search reviews, buying guides, and product picks from Sugandha Tech.',
  alternates: {
    canonical: `${siteMeta().baseUrl}/search`
  },
  robots: {
    index: false,
    follow: false
  }
}

export default function SearchPage() {
  return <SearchPageClient />
}
