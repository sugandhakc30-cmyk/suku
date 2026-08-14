import Link from 'next/link'
import { articles } from '../data/articles'

export default function ReviewsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Reviews</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {articles.map((a) => (
          <article key={a.slug} className="border rounded p-4">
            <h2 className="font-semibold text-lg"><Link href={`/reviews/${a.slug}`}>{a.title}</Link></h2>
            <p className="text-sm text-gray-600">{a.excerpt}</p>
            <div className="mt-2 text-xs text-gray-500">{a.date}</div>
          </article>
        ))}
      </div>
    </div>
  )
}