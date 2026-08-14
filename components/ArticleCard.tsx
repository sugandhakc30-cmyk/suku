
import Link from 'next/link'
import type { Article } from '../data/articles'

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="border rounded-lg overflow-hidden bg-white">
      <img src={article.image || '/images/article-1.jpg'} alt={article.title} className="w-full h-44 object-cover" />
      <div className="p-4">
        <div className="text-xs text-brand uppercase">{article.category}</div>
        <h3 className="mt-1 font-semibold text-lg">{article.title}</h3>
        <p className="text-sm text-gray-600 mt-2">{article.excerpt}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-gray-500">{article.date}</span>
          <Link href={`/reviews/${article.slug}`} className="text-sm text-brand">Read Review →</Link>
        </div>
      </div>
    </article>
  )
}