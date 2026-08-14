import Link from 'next/link'
import React from 'react'

export default function CategoryCard({ title, href, description, image }: { title: string; href: string; description?: string; image?: string }) {
  return (
    <Link href={href} className="block border rounded-lg overflow-hidden bg-white hover:shadow">
      {image ? <img src={image} alt={title} className="w-full h-36 object-cover" /> : <div className="w-full h-36 bg-gray-100 flex items-center justify-center text-gray-400">{title}</div>}
      <div className="p-4">
        <h3 className="font-semibold">{title}</h3>
        {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
      </div>
    </Link>
  )
}