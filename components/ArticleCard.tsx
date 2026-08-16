
import Link from 'next/link'
import type { Article } from '../data/articles'

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group border border-neutral-200 rounded-xl overflow-hidden bg-white hover:border-brand-300 hover:shadow-lg transition-all duration-300">
      <div className="relative overflow-hidden h-48 bg-neutral-100">
        <img 
          src={article.image || '/images/article-1.jpg'} 
          alt={article.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
        />
      </div>
      <div className="p-5">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-brand-50 border border-brand-200 rounded-full mb-3">
          <span className="w-1.5 h-1.5 bg-brand-600 rounded-full"></span>
          <span className="text-xs font-semibold text-brand-700 uppercase tracking-wider">{article.category}</span>
        </div>
        <h3 className="font-bold text-lg text-neutral-900 group-hover:text-brand-600 transition-colors line-clamp-2">{article.title}</h3>
        <p className="text-sm text-neutral-600 mt-2 line-clamp-2">{article.excerpt}</p>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-xs text-neutral-500 font-medium">{article.date}</span>
          <Link href={`/reviews/${article.slug}`} className="text-sm font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1">Read Review <span>→</span></Link>
        </div>
      </div>
    </article>
  )
}