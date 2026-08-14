import type { Metadata } from 'next'
import { siteMeta } from '../../lib/seo'

export const metadata: Metadata = {
  title: 'Privacy Policy — Sugandha Tech',
  description: 'Privacy policy covering cookies, analytics, forms and affiliate links.',
  alternates: { canonical: `${siteMeta().baseUrl}/privacy-policy` }
}

export default function PrivacyPolicy() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Privacy Policy</h1>
      <p className="mt-4">We respect your privacy. This site uses cookies for analytics and functionality. Affiliate links are used in some articles. No personal data is sold. For details, replace this with a full policy tailored to your jurisdiction.</p>
    </div>
  )
}