
'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBar({ initial = '' }: { initial?: string }) {
  const [q, setQ] = useState(initial)
  const router = useRouter()

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const query = q.trim()
    router.push(`/search?q=${encodeURIComponent(query)}`)
  }

  return (
    <form role="search" onSubmit={onSubmit} className="w-full md:w-64 flex items-center gap-2 bg-neutral-100 border border-neutral-300 rounded-lg px-3 py-2 hover:border-brand-300 focus-within:border-brand-600 focus-within:ring-2 focus-within:ring-brand-600/20 transition-all">
      <label htmlFor="site-search" className="sr-only">Search site</label>
      <svg className="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input
        id="site-search"
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search reviews..."
        className="flex-1 bg-transparent text-sm text-neutral-900 placeholder-neutral-500 focus:outline-none"
      />
      {q && (
        <button
          type="button"
          onClick={() => setQ('')}
          className="text-neutral-400 hover:text-neutral-600 transition-colors"
        >
          ✕
        </button>
      )}
      <button 
        type="submit" 
        className="px-3 py-1.5 bg-brand-600 text-white text-sm font-semibold rounded hover:bg-brand-700 transition-colors whitespace-nowrap"
      >
        Search
      </button>
    </form>
  )
}