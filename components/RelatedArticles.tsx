import Link from 'next/link'
import React from 'react'

type RelatedItem = {
  title: string
  href: string
  date?: string
}

export default function RelatedArticles({ items = [] }: { items?: RelatedItem[] }) {
  if (!items || items.length === 0) return null
  return (
    <aside className="border rounded p-4 bg-gray-50">
      <h4 className="font-semibold mb-2">Related Articles</h4>
      <ul className="space-y-2 text-sm">
        {items.map((it) => (
          <li key={it.href} className="flex flex-col">
            <Link href={it.href} className="text-brand hover:underline">{it.title}</Link>
            {it.date && <span className="text-xs text-gray-500">{it.date}</span>}
          </li>
        ))}
      </ul>
    </aside>
  )
}