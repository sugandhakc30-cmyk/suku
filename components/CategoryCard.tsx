
import Link from 'next/link'
import React from 'react'

export default function CategoryCard({ 
  title, 
  href, 
  description, 
  image,
  categoryId,
  categoryName,
  categoryIcon
}: { 
  title?: string; 
  href?: string; 
  description?: string; 
  image?: string;
  categoryId?: string;
  categoryName?: string;
  categoryIcon?: string;
}) {
  const displayTitle = categoryName || title || 'Category'
  const displayHref = href || (categoryId ? `/categories/${categoryId}` : '#')
  const displayDescription = description
  
  return (
    <Link href={displayHref} className="group block border border-neutral-200 rounded-xl overflow-hidden bg-white hover:border-brand-300 hover:shadow-lg transition-all duration-300">
      {image ? (
        <div className="relative overflow-hidden h-40 bg-neutral-100">
          <img 
            src={image} 
            alt={displayTitle} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
          />
        </div>
      ) : (
        <div className="w-full h-40 bg-gradient-to-br from-brand-50 to-blue-50 flex items-center justify-center">
          {categoryIcon ? (
            <span className="text-4xl">{categoryIcon}</span>
          ) : (
            <div className="text-center">
              <svg className="w-12 h-12 mx-auto text-brand-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V7a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
          )}
        </div>
      )}
      <div className="p-5">
        <h3 className="font-bold text-lg text-neutral-900 group-hover:text-brand-600 transition-colors line-clamp-2">{displayTitle}</h3>
        {displayDescription && <p className="text-sm text-neutral-600 mt-2 line-clamp-2">{displayDescription}</p>}
        <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 group-hover:gap-2 transition-all">
          Explore <span>→</span>
        </div>
      </div>
    </Link>
  )
}