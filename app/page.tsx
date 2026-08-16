
import Hero from '../components/Hero'
import ArticleCard from '../components/ArticleCard'
import CategoryCard from '../components/CategoryCard'
import ProductCard from '../components/ProductCard'
import { articles } from '../data/articles'
import { categories } from '../data/categories'
import { products } from '../data/products'
import type { Metadata } from 'next'
import { siteMeta } from '../lib/seo'

export const metadata: Metadata = {
  title: 'Sugandha Tech — Home',
  description: 'Independent technology reviews and buying guidance for smarter purchase decisions.',
  alternates: { canonical: (siteMeta().baseUrl || 'https://sugandhatech.in.net') + '/' }
}

export default function Home() {
  return (
    <>
      <Hero />

      {/* Featured Section */}
      <section className="py-12 px-4">
        <div className="rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-950 text-white shadow-2xl overflow-hidden border border-neutral-700/50 backdrop-blur">
          <div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-0">
            <div className="p-8 md:p-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-300">Editor's Pick</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-5 text-white">
                HP Omen RTX 5070 is built for serious gaming performance.
              </h2>
              
              <p className="text-lg text-neutral-300 mb-8 leading-relaxed max-w-2xl">
                A premium 16-inch gaming laptop with AMD Ryzen 9 8940HX power, 32GB DDR5 memory, a 240Hz display, and a calm, refined look that fits both creators and competitive players.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <a href="/reviews/hp-omen-rtx-5070-gaming-laptop-review" className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Read the Review
                </a>
                <a href="/guides/gaming-laptop-buying-guide" className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-all duration-200 backdrop-blur-sm">
                  Buying Guide
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-600/20 via-blue-500/10 to-neutral-900 p-8 md:p-12 flex items-center justify-center border-l border-white/10">
              <div className="w-full">
                <div className="text-xs uppercase tracking-widest font-semibold text-blue-300 mb-6">Quick Specifications</div>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center gap-4 pb-4 border-b border-white/10">
                    <span className="text-neutral-400">CPU</span>
                    <strong className="text-white font-semibold">AMD Ryzen 9 8940HX</strong>
                  </li>
                  <li className="flex justify-between items-center gap-4 pb-4 border-b border-white/10">
                    <span className="text-neutral-400">GPU</span>
                    <strong className="text-white font-semibold">RTX 5070</strong>
                  </li>
                  <li className="flex justify-between items-center gap-4 pb-4 border-b border-white/10">
                    <span className="text-neutral-400">Display</span>
                    <strong className="text-white font-semibold">16" WQXGA</strong>
                  </li>
                  <li className="flex justify-between items-center gap-4">
                    <span className="text-neutral-400">Refresh Rate</span>
                    <strong className="text-white font-semibold">240Hz</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-14 px-4">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">Featured Products</h2>
          <p className="text-lg text-neutral-600">Handpicked tech products reviewed and recommended by our experts.</p>
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
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

      {/* Categories Section */}
      <section className="py-14 px-4">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">Browse by Category</h2>
          <p className="text-lg text-neutral-600">Explore reviews and guides across different technology categories.</p>
        </div>
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.slice(0, 8).map((category) => (
            <CategoryCard
              key={category.slug}
              href={category.href}
              title={category.name}
              description={category.description}
            />
          ))}
        </div>
      </section>
    </>
  )
}