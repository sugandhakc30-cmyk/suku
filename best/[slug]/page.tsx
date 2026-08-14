
import { notFound } from 'next/navigation'
import { products } from '../../data/products'
import ProductCard from '../../components/ProductCard'

const guides = [
  'best-gaming-laptops',
  'best-gaming-pcs',
  'best-graphics-cards',
  'best-gaming-monitors',
  'best-4k-projectors',
  'best-gaming-accessories'
]

export default function BestPage({ params }: { params: { slug: string }}) {
  if (!guides.includes(params.slug)) return notFound()

  const featuredProducts = products.filter((product) => {
    if (params.slug === 'best-gaming-accessories') {
      return product.category === 'Gaming Accessories'
    }
    return false
  })

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">{params.slug.replace(/-/g,' ')}</h1>
      <p className="text-sm text-gray-600">Introduction and recommended picks for {params.slug}</p>

      <section className="mt-6">
        <h2 className="font-semibold">Best Overall</h2>
        <p className="mt-2">Recommended pick and reasoning.</p>
      </section>

      {featuredProducts.length > 0 && (
        <section className="mt-8">
          <h2 className="font-semibold text-xl mb-4">Featured products</h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProducts.map((product) => (
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
    </div>
  )
}