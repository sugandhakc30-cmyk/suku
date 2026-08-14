import type { Metadata } from 'next'
import { siteMeta } from '../../lib/seo'

export const metadata: Metadata = {
  title: 'Affiliate Disclosure — Sugandha Tech',
  description: 'Affiliate disclosure and Amazon Associates statement for Sugandha Tech.',
  alternates: { canonical: `${siteMeta().baseUrl}/affiliate-disclosure` }
}

export default function AffiliateDisclosure() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Affiliate Disclosure</h1>
      <p className="mt-4">Sugandha Tech participates in the Amazon Associates Program. We may earn commissions from qualifying purchases. We aim to provide honest and useful editorial content — affiliate links do not affect our recommendations.</p>
      <p className="mt-2"><strong>"As an Amazon Associate I earn from qualifying purchases."</strong></p>
    </div>
  )
}