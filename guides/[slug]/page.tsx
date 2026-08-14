import { notFound } from 'next/navigation'
import { guides } from '../../data/guides'

export default function GuidePage({ params }: { params: { slug: string }}) {
  const item = guides.find(g => g.slug === params.slug)
  if (!item) return notFound()
  return (
    <article>
      <h1 className="text-2xl font-bold">{item.title}</h1>
      <p className="text-sm text-gray-600">{item.date}</p>
      <section className="mt-4">
        <h2 className="font-semibold">What to look for</h2>
        <p className="mt-2 text-gray-700">Guide content (CPU, GPU, RAM, Storage, Display, Cooling, Battery).</p>
      </section>
    </article>
  )
}