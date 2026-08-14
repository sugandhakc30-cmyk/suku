import Link from 'next/link'

export default function BestIndex() {
  const picks = [
    { slug: 'best-gaming-laptops', title: 'Best Gaming Laptops' },
    { slug: 'best-gaming-pcs', title: 'Best Gaming PCs' },
    { slug: 'best-graphics-cards', title: 'Best Graphics Cards' },
    { slug: 'best-gaming-monitors', title: 'Best Gaming Monitors' },
    { slug: 'best-4k-projectors', title: 'Best 4K Projectors' },
    { slug: 'best-gaming-accessories', title: 'Best Gaming Accessories' }
  ]
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Our Best Picks</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {picks.map(p => (
          <Link key={p.slug} href={`/best/${p.slug}`} className="border rounded p-4 bg-white">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-600 mt-1">Buying guide and recommended products.</p>
          </Link>
        ))}
      </div>
    </div>
  )
}