
import type { Metadata } from 'next'
import { siteMeta } from '../../lib/seo'

export const metadata: Metadata = {
  title: 'About Sugandha Tech',
  description: 'About Sugandha Tech — what we publish and our editorial approach.',
  alternates: { canonical: `${siteMeta().baseUrl}/about` }
}

export default function About() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold text-neutral-900">About Sugandha Tech</h1>
      <p className="mt-4 text-lg text-neutral-700">
        Sugandha Tech is a technology publication focused on clear, research-based reviews and practical buying advice. We aim to help readers understand what matters in a product, how it compares to alternatives, and whether it fits a specific use case.
      </p>

      <div className="mt-8 space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-neutral-900">What we publish</h2>
          <ul className="mt-3 list-disc pl-6 text-neutral-700 space-y-2">
            <li>Product reviews that explain performance, trade-offs, and who the device is best for.</li>
            <li>Buying guides built around real-use scenarios, not vague marketing language.</li>
            <li>Comparisons and product explainers that help readers make faster, more informed decisions.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">How we work</h2>
          <p className="mt-3 text-neutral-700">
            Our content is informed by official product information, retailer listings, public reviews, and industry reporting. When we have not personally tested a product, we say so clearly and avoid over-claiming. We also distinguish between a product’s specs, the experience of buyers, and the claims made by manufacturers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">Transparency</h2>
          <p className="mt-3 text-neutral-700">
            Some links on our site may be affiliate links. If you purchase through them, we may earn a commission at no extra cost to you. We disclose this clearly and keep recommendations based on value, usefulness, and reader intent, not just commission potential.
          </p>
        </section>
      </div>
    </div>
  )
}