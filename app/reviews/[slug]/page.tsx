import { notFound } from 'next/navigation'
import { articles } from '../../../data/articles'
import ReviewSummary from '../../../components/ReviewSummary'
import ProsCons from '../../../components/ProsCons'
import RelatedArticles from '../../../components/RelatedArticles'
import type { Metadata } from 'next'
import { siteMeta } from '../../../lib/seo'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const item = articles.find((a) => a.slug === params.slug)
  if (!item) {
    return {
      title: 'Review not found — Sugandha Tech'
    }
  }
  const base = siteMeta().baseUrl || 'https://sugandhatech.in.net'
  return {
    title: `${item.title} — Sugandha Tech`,
    description: item.excerpt,
    alternates: { canonical: `${base}/reviews/${item.slug}` },
    openGraph: {
      title: item.title,
      description: item.excerpt,
      url: `${base}/reviews/${item.slug}`
    },
    keywords: ['HP Omen RTX 5070 review', 'AMD Ryzen 9 8940HX gaming laptop', 'HP Omen gaming laptop', '240Hz gaming laptop review', 'RTX 5070 laptop']
  }
}

export default function ReviewPage({ params }: { params: { slug: string } }) {
  const item = articles.find((a) => a.slug === params.slug)
  if (!item) return notFound()
  const related = articles.filter((a) => a.slug !== item.slug).slice(0, 3).map(r => ({ title: r.title, href: `/reviews/${r.slug}`, date: r.date }))

  return (
    <article>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <div className="mb-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <img src={item.image || '/images/HP-OMEN-Ultra-Slim-RTX-5070-Gaming-Laptop.webp'} alt={item.title} className="h-72 w-full object-cover" />
          </div>

          <h1 className="text-3xl font-bold leading-tight">{item.title}</h1>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>{item.date}</span>
            <span>•</span>
            <span>{item.category}</span>
          </div>
          <p className="mt-5 text-lg text-gray-700">{item.excerpt}</p>

          <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-slate-700">
            <strong>Affiliate disclosure:</strong> This article may contain affiliate links. If you buy through them, Sugandha Tech may earn a small commission at no extra cost to you.
          </div>

          {item.affiliateUrl && (
            <div className="mt-6">
              <a
                href={item.affiliateUrl}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="inline-block rounded bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
              >
                View Product on Amazon →
              </a>
            </div>
          )}

          {item.sections && item.sections.length > 0 && (
            <div className="mt-8 space-y-8">
              {item.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-xl font-semibold text-slate-900">{section.heading}</h2>
                  <p className="mt-2 text-gray-700 leading-relaxed">{section.body}</p>
                </section>
              ))}
            </div>
          )}

          {!item.sections && (
            <section className="mt-6">
              <h2 className="font-semibold">Quick Verdict</h2>
              <p className="text-sm text-gray-700 mt-2">A concise editorial verdict based on available specs and research.</p>
              <ProsCons
                pros={['Strong performance', 'Good display', 'Useful feature set']}
                cons={['Premium pricing', 'Trade-offs depending on workload', 'May not suit every user']}
              />
            </section>
          )}
        </div>
        <aside className="w-full lg:w-96 space-y-4">
          <ReviewSummary
            bestFor={item.category === 'Gaming Laptops' ? 'Gamers seeking high performance' : 'Readers comparing core features'}
            keyStrength={item.category === 'Gaming Laptops' ? 'Excellent CPU/GPU pairing' : 'Clear editorial guidance'}
            mainConsideration={item.category === 'Gaming Laptops' ? 'Price and portability' : 'Value and use case'}
            overallVerdict={item.category === 'Gaming Laptops' ? 'A strong option for performance-first buyers' : 'A helpful guide for informed shopping'}
          />
          <RelatedArticles items={related} />
        </aside>
      </div>
    </article>
  )
}