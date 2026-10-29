import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { siteMeta } from '../../../lib/seo'
import { news } from '../../../data/news'

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