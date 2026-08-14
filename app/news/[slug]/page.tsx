import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { siteMeta } from '../../../lib/seo'

const news = [
  { slug: 'chipmaker-announces-new-gpu', title: 'Chipmaker Announces New GPU', excerpt: 'New GPU announced, key specs revealed.', date: '2026-08-01' },
  { slug: 'monitor-refresh-rate-trends', title: 'Monitor Refresh Rate Trends', excerpt: 'How refresh rates are evolving in displays.', date: '2026-07-20' },
  { slug: 'console-updates-2026', title: 'Console Updates 2026', excerpt: 'Latest console firmware updates and features.', date: '2026-06-14' }
]

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const item = news.find(n => n.slug === params.slug)
  if (!item) return { title: 'News not found — Sugandha Tech' }
  const base = siteMeta().baseUrl
  return {
    title: `${item.title} — Sugandha Tech`,
    description: item.excerpt,
    alternates: { canonical: `${base}/news/${item.slug}` }
  }
}

export default function NewsArticle({ params }: { params: { slug: string }}) {
  const item = news.find(n => n.slug === params.slug)
  if (!item) return notFound()
  return (
    <article>
      <h1 className="text-2xl font-bold">{item.title}</h1>
      <p className="text-sm text-gray-500">{item.date}</p>
      <section className="mt-4">
        <p>{item.excerpt}</p>
        <p className="mt-2 text-gray-700">Original reporting and context — do not copy other sites. Summarize and link to sources where relevant.</p>
      </section>
    </article>
  )
}