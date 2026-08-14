import type { Metadata } from 'next'
import { siteMeta } from '../../lib/seo'

export const metadata: Metadata = {
  title: 'Cookie Policy — Sugandha Tech',
  description: 'Cookie policy and how visitors can manage cookies.',
  alternates: { canonical: `${siteMeta().baseUrl}/cookie-policy` }
}

export default function CookiePolicy() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Cookie Policy</h1>
      <p className="mt-4">We use necessary and analytics cookies. Users can clear cookies via browser settings. This is a basic placeholder — provide a more complete cookie policy for production.</p>
    </div>
  )
}