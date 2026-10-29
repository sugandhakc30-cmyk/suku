import Link from 'next/link'
import type { Metadata } from 'next'
import { siteMeta } from '../../lib/seo'
import { news } from '../../data/news'

export const metadata: Metadata = {
  title: 'Tech News — Sugandha Tech',
  description: 'Technology news, announcements and analysis.',
  alternates: { canonical: `${siteMeta().baseUrl}/news` }
}

export default function NewsIndex() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Tech News</h1>
      <div className="space-y-4">
        {news.map(n => (
          <Link key={n.slug} href={`/news/${n.slug}`} className="block border rounded p-4 bg-white">
            <h3 className="font-semibold">{n.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{n.excerpt}</p>
            <div className="text-xs text-gray-500 mt-2">{n.date}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}