import type { Metadata } from 'next'
import { siteMeta } from '../../lib/seo'

export const metadata: Metadata = {
  title: 'Editorial Policy — Sugandha Tech',
  description: 'How Sugandha Tech researches and prepares editorial content and manages affiliate relationships.',
  alternates: { canonical: `${siteMeta().baseUrl}/editorial-policy` }
}

export default function EditorialPolicy() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Editorial Policy</h1>
      <p className="mt-4">This page explains how we select products, prepare articles, and handle affiliate links. We do not claim hands-on testing unless explicitly stated. Articles are prepared from vendor specs, public testing results, and available information; we link to sources where appropriate.</p>
    </div>
  )
}