
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="container mx-auto grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Find the Right Tech Before You Buy</h1>
          <p className="text-lg text-gray-700 mb-6">Independent technology reviews and buying guidance designed to help you make smarter decisions.</p>
          <div className="flex gap-4">
            <Link href="/reviews" className="px-4 py-2 bg-brand text-white rounded hover:bg-brand-dark">Explore Reviews</Link>
            <Link href="/guides" className="px-4 py-2 border rounded">Explore Guides</Link>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="w-full h-56 bg-gray-100 rounded flex items-center justify-center">
            <svg width="220" height="140" viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="220" height="140" rx="12" fill="#f3f4f6"/>
              <text x="110" y="75" text-anchor="middle" fill="#9ca3af" font-family="Inter" font-size="18">Technology visual</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}