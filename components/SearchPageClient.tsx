'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useMemo } from 'react'
import { searchAll } from '../lib/search'

export default function SearchPageClient() {
  const params = useSearchParams()
  const query = params.get('q') || ''

  const results = useMemo(() => searchAll(query), [query])

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Search</h1>
      <p className="text-sm text-gray-600 mb-6">
        {query ? `Showing results for “${query}”` : 'Enter a keyword to search reviews and buying guides.'}
      </p>

      {!query ? (
        <div className="border rounded p-6 bg-white text-gray-600">
          Use the search box above to explore articles and buying guides.
        </div>
      ) : results.length === 0 ? (
        <div className="border rounded p-6 bg-white text-gray-600">
          No results were found for this search term.
        </div>
      ) : (
        <div className="space-y-4">
          {results.map((item) => (
            <article key={item.id} className="border rounded p-4 bg-white flex gap-4 flex-col md:flex-row">
              <div className="w-full md:w-32 h-24 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-500 uppercase">
                {item.category}
              </div>
              <div className="flex-1">
                <h2 className="font-semibold text-lg"><Link href={item.href}>{item.title}</Link></h2>
                <p className="text-sm text-gray-600 mt-1">{item.excerpt}</p>
                <div className="mt-2 text-xs text-gray-500">{item.date || 'Updated recently'}</div>
                <Link href={item.href} className="mt-3 inline-block text-sm font-medium text-brand">Open article →</Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
