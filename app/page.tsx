
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

      <section className="container mx-auto py-8">
        <div className="rounded-[28px] bg-slate-950 text-white shadow-[0_25px_80px_rgba(15,23,42,0.18)] overflow-hidden">
          <div className="grid lg:grid-cols-[1.3fr_0.7fr]">
            <div className="p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.28em] text-blue-300">Editor's Pick</p>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
                HP Omen RTX 5070 is built for serious gaming performance.
              </h2>
              <p className="mt-4 max-w-xl text-slate-300 text-base md:text-lg">
                A premium 16-inch gaming laptop with AMD Ryzen 9 8940HX power, 32GB DDR5 memory, a 240Hz display, and a calm, refined look that fits both creators and competitive players.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/reviews/hp-omen-rtx-5070-gaming-laptop-review" className="inline-flex items-center rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-500">Read the review</a>
                <a href="/guides/gaming-laptop-buying-guide" className="inline-flex items-center rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white hover:bg-white/5">Buying guide</a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-slate-800 p-8 md:p-10 flex items-center justify-center">
              <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-300">Quick Specs</div>
                <ul className="mt-5 space-y-3 text-sm text-slate-200">
                  <li className="flex justify-between gap-4 border-b border-white/10 pb-3"><span>CPU</span><strong>AMD Ryzen 9 8940HX</strong></li>
                  <li className="flex justify-between gap-4 border-b border-white/10 pb-3"><span>GPU</span><strong>RTX 5070</strong></li>
                  <li className="flex justify-between gap-4 border-b border-white/10 pb-3"><span>Display</span><strong>16&quot; WQXGA</strong></li>
                  <li className="flex justify-between gap-4"><span>Refresh</span><strong>240Hz</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
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

    </>
  )
}