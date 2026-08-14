import { notFound } from 'next/navigation'
import { guides } from '../../../data/guides'
import type { Metadata } from 'next'
import { siteMeta } from '../../../lib/seo'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const item = guides.find(g => g.slug === params.slug)
  if (!item) return { title: 'Guide not found — Sugandha Tech' }
  const base = siteMeta().baseUrl
  return {
    title: `${item.title} — Sugandha Tech`,
    description: item.excerpt,
    alternates: { canonical: `${base}/guides/${item.slug}` }
  }
}

export default function GuidePage({ params }: { params: { slug: string }}) {
  const item = guides.find(g => g.slug === params.slug)
  if (!item) return notFound()

  return (
    <article>
      <h1 className="text-3xl font-bold leading-tight">{item.title}</h1>
      <p className="mt-2 text-sm text-gray-600">{item.date}</p>

      <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-slate-700">
        <strong>Affiliate disclosure:</strong> We may earn a commission if you buy through affiliate links in this guide.
      </div>

      {item.sections && item.sections.length > 0 ? (
        <div className="mt-8 space-y-8">
          {item.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-semibold">{section.heading}</h2>
              <p className="mt-2 text-gray-700 leading-relaxed">{section.body}</p>
            </section>
          ))}
        </div>
      ) : (
        <section className="mt-4">
          <h2 className="font-semibold">What to look for</h2>
          <p className="mt-2 text-gray-700">Guide content (CPU, GPU, RAM, Storage, Display, Cooling, Battery).</p>
        </section>
      )}
    </article>
  )
}