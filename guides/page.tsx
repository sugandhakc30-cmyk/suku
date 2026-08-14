import { guides } from '../data/guides'
import Link from 'next/link'

export default function GuidesIndex() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Technology Buying Guides</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {guides.map(g => (
          <Link key={g.slug} href={`/guides/${g.slug}`} className="border rounded p-4 bg-white">
            <h3 className="font-semibold">{g.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{g.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}