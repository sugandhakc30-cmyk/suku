import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { products } from '../../../data/products'
import type { Metadata } from 'next'
import { siteMeta } from '../../../lib/seo'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const item = products.find((product) => product.id === params.id)

  if (!item) {
    return {
      title: 'Product not found — Sugandha Tech'
    }
  }

  const base = siteMeta().baseUrl || 'https://sugandhatech.in.net'

  return {
    title: `${item.name} — Sugandha Tech`,
    description: item.description || 'Product review and buying guide.',
    alternates: { canonical: `${base}/products/${item.id}` },
    openGraph: {
      title: item.name,
      description: item.description || 'Product review and buying guide.',
      url: `${base}/products/${item.id}`
    },
    keywords: [
      `${item.name} review`,
      item.category,
      item.name
    ]
  }
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const item = products.find((product) => product.id === params.id)

  if (!item) return notFound()

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-4 pt-8">
        <nav className="text-sm text-slate-500">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          {' '} / {' '}
          <Link href="/reviews" className="hover:text-blue-600">Reviews</Link>
          {' '} / {item.name}
        </nav>
      </div>

      <article className="mx-auto max-w-6xl px-4 py-8">
        <div className="max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600">
            {item.heroLabel || 'Product Review'}
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            {item.name}
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            {item.summary || item.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-500">
            <span>{item.published ? `Published: ${item.published}` : 'Published: August 2026'}</span>
            <span>•</span>
            <span>Category: {item.category}</span>
          </div>
        </div>

        <div className="mt-8 rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm text-slate-700">
          <strong>Affiliate Disclosure:</strong> Some links on this page are affiliate links. If you make a qualifying purchase through one of these links, Sugandha Tech may earn a commission at no additional cost to you.
        </div>

        <section className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="overflow-hidden rounded-2xl border bg-slate-50 p-6">
            <div className="relative aspect-square">
              <Image
                src={item.image || '/images/article-2.jpg'}
                alt={item.name}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold">{item.name}</h2>
            <p className="mt-3 text-slate-600">{item.description}</p>

            <div className="mt-6 rounded-xl border bg-slate-50 p-5">
              <h3 className="font-bold">Quick Verdict</h3>
              <p className="mt-3 leading-7 text-slate-700">
                {item.summary || 'This product offers a strong balance of value, features, and usability for the target buyer.'}
              </p>
            </div>

            {item.affiliateUrl && (
              <a
                href={item.affiliateUrl}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Check Price on Amazon →
              </a>
            )}

            <p className="mt-3 text-center text-xs text-slate-500">
              Price and availability may change. Check Amazon for the latest details.
            </p>
          </div>
        </section>

        {(item.pros || item.cons) && (
          <section className="mt-16 grid gap-8 md:grid-cols-2">
            {item.pros && item.pros.length > 0 && (
              <div className="rounded-xl border p-6">
                <h2 className="text-2xl font-bold text-green-700">What We Like</h2>
                <ul className="mt-5 space-y-3 text-slate-700">
                  {item.pros.map((pro) => (
                    <li key={pro}>✓ {pro}</li>
                  ))}
                </ul>
              </div>
            )}

            {item.cons && item.cons.length > 0 && (
              <div className="rounded-xl border p-6">
                <h2 className="text-2xl font-bold text-orange-700">Things to Consider</h2>
                <ul className="mt-5 space-y-3 text-slate-700">
                  {item.cons.map((con) => (
                    <li key={con}>• {con}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {item.reviewSections && item.reviewSections.length > 0 && (
          <div className="mt-16 space-y-10">
            {item.reviewSections.map((section) => (
              <section key={section.heading} className="max-w-4xl">
                <h2 className="text-3xl font-bold">{section.heading}</h2>
                <p className="mt-5 leading-8 text-slate-700">{section.body}</p>
              </section>
            ))}
          </div>
        )}

        {item.affiliateUrl && (
          <section className="mt-16 rounded-2xl bg-blue-50 p-8 text-center">
            <h2 className="text-2xl font-bold">Interested in this product?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              Check the current availability and price before purchasing.
            </p>
            <a
              href={item.affiliateUrl}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="mt-6 inline-flex rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700"
            >
              Check Price on Amazon →
            </a>
          </section>
        )}
      </article>
    </main>
  )
}
