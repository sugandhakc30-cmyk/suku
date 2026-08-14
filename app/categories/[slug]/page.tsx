import { notFound } from 'next/navigation'
import { categories } from '../../../data/categories'
import { products } from '../../../data/products'
import ProductCard from '../../../components/ProductCard'
import type { Metadata } from 'next'
import { siteMeta } from '../../../lib/seo'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const item = categories.find((c) => c.slug === params.slug)
  if (!item) return { title: 'Category not found — Sugandha Tech' }

  return {
    title: `${item.name} — Sugandha Tech`,
    description: item.description,
    alternates: { canonical: `${siteMeta().baseUrl}/categories/${item.slug}` }
  }
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const item = categories.find((c) => c.slug === params.slug)
  if (!item) return notFound()

  const categoryProducts = products.filter((product) => product.category === item.name)

  return (
    <article>
      <h1 className="text-3xl font-bold mb-3">{item.name}</h1>
      <p className="text-gray-700">{item.description}</p>
      <section className="mt-6">
        <h2 className="font-semibold text-xl mb-2">What to expect</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Original buying guidance</li>
          <li>Product comparisons and recommendations</li>
          <li>Helpful editorial context before purchase</li>
          <li>Relevant related reviews and guides</li>
        </ul>
      </section>

      {categoryProducts.length > 0 && (
        <section className="mt-8">
          <h2 className="font-semibold text-xl mb-4">Featured picks</h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {categoryProducts.map((product) => (
              <ProductCard
                key={product.id}
                productId={product.id}
                productName={product.name}
                image={product.image}
                description={product.description}
                category={product.category}
                affiliateUrl={product.affiliateUrl}
              />
            ))}
          </div>
        </section>
      )}
    </article>
  )
}
