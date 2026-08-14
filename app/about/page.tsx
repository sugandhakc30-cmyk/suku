
import type { Metadata } from 'next'
import { siteMeta } from '../../lib/seo'

export const metadata: Metadata = {
  title: 'About Sugandha Tech',
  description: 'About Sugandha Tech — what we publish and our editorial approach.',
  alternates: { canonical: `${siteMeta().baseUrl}/about` }
}

export default function About() {
  return (
    <div>
      <h1 className="text-2xl font-bold">About Sugandha Tech</h1>
      <p className="mt-4 text-gray-700">Sugandha Tech is an independent technology publication focused on thoughtful reviews and practical buying guidance for modern digital life.</p>
      <h2 className="mt-6 font-semibold">What we publish</h2>
      <ul className="mt-2 list-disc ml-6 text-gray-700">
        <li>In-depth reviews</li>
        <li>Buying guides</li>
        <li>Technology news and analysis</li>
      </ul>
    </div>
  )
}