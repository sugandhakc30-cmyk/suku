import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://sugandhatech.in.net'

  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    host: baseUrl,
    sitemap: `${baseUrl}/sitemap.xml`
  }
}