import React from 'react'
import { siteMeta } from '../lib/seo'

export default function JsonLd() {
  const meta = siteMeta()
  const base = meta.baseUrl.replace(/\/$/, '')
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: meta.siteName,
    url: base,
    logo: `${base}/images/logo.svg`,
    sameAs: []
  }
  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: base,
    name: meta.siteName,
    description: meta.description,
    publisher: {
      '@type': 'Organization',
      name: meta.siteName
    }
  }

  const json = JSON.stringify([org, website], null, 2)

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
  )
}