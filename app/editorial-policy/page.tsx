import type { Metadata } from 'next'
import { siteMeta } from '../../lib/seo'

export const metadata: Metadata = {
  title: 'Editorial Policy — Sugandha Tech',
  description: 'How Sugandha Tech researches and prepares editorial content and manages affiliate relationships.',
  alternates: { canonical: `${siteMeta().baseUrl}/editorial-policy` }
}

export default function EditorialPolicy() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold text-neutral-900">Editorial Policy</h1>

      <div className="mt-6 space-y-6 text-neutral-700">
        <p>
          Sugandha Tech publishes reviews, buying guides, and product explainers to help readers evaluate technology options with more confidence. Our editorial goal is practical clarity: we focus on the features that matter most in real use, the trade-offs buyers should know about, and the scenarios where a product makes sense.
        </p>

        <p>
          We base our work on official product information, manufacturer specifications, retailer listings, public testing, and broader technology coverage. We do not present marketing claims as verified performance unless they are clearly supported by evidence. If we have not tested a product ourselves, we make that clear and avoid overstating conclusions.
        </p>

        <p>
          Product recommendations are guided by usefulness, value, and user fit. We consider performance, reliability, display quality, ergonomics, pricing, and the context in which a buyer will use the device. Our aim is to reduce guesswork, not to push a single brand or narrative.
        </p>

        <p>
          We also maintain a clear affiliate disclosure. Some links on the site may be affiliate links, and if a reader purchases through them, Sugandha Tech may earn a commission at no added cost. Those commissions do not influence editorial independence, and we disclose affiliate relationships in relevant content and policy pages.
        </p>
      </div>
    </div>
  )
}