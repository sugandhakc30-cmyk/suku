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
    <form role="search" onSubmit={onSubmit} className="flex items-center gap-2">
      <label htmlFor="site-search" className="sr-only">Search site</label>
      <input
        id="site-search"
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search reviews, guides, news..."
        className="border rounded px-3 py-2 w-64 focus:outline-none focus:ring focus:ring-brand/30"
      />
      <button type="submit" className="px-3 py-2 bg-brand text-white rounded">Search</button>
    </form>
  )
}