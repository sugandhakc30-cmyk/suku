import type { Metadata } from 'next'
import { siteMeta } from '../../lib/seo'

export const metadata: Metadata = {
  title: 'Terms and Conditions — Sugandha Tech',
  description: 'Terms and conditions for using Sugandha Tech.',
  alternates: { canonical: `${siteMeta().baseUrl}/terms` }
}

export default function Terms() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Terms and Conditions</h1>
      <p className="mt-4">Terms describing site usage, content ownership, affiliate relationships and limitations of liability. Replace with company-specific legal text before publishing.</p>
    </div>
  )
}