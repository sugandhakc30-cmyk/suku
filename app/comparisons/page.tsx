import type { Metadata } from 'next'
import { siteMeta } from '../../lib/seo'

export const metadata: Metadata = {
  title: 'Comparisons — Sugandha Tech',
  description: 'Side-by-side technology comparisons and buying guidance.',
  alternates: { canonical: `${siteMeta().baseUrl}/comparisons` }
}

export default function ComparisonsIndex() {
  return (
    <article>
      <h1 className="text-3xl font-bold">Comparisons</h1>
      <p className="mt-3 text-gray-700">Comparison guides are being prepared.</p>
    </article>
  )
}