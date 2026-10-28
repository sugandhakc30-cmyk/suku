import type { MetadataRoute } from 'next'
import { siteMeta } from '../lib/seo'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteMeta().baseUrl

  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: `${baseUrl}/sitemap.xml`
  }
}