'use client'
import Link from 'next/link'
import React from 'react'

type Crumb = { href: string; label: string }

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  if (!crumbs || crumbs.length === 0) return null
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-gray-600">
      <ol className="flex gap-2 items-center">
        {crumbs.map((c, i) => (
          <li key={c.href} className="flex items-center">
            {i > 0 && <span aria-hidden className="mx-1">/</span>}
            {i < crumbs.length - 1 ? (
              <Link href={c.href} className="hover:underline">
                {c.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-gray-800">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}