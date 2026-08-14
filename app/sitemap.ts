import type { MetadataRoute } from 'next'
import { siteMeta } from '../lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const meta = siteMeta()
  const base = meta.baseUrl

  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/reviews`, lastModified: new Date() },
    { url: `${base}/guides`, lastModified: new Date() },
    { url: `${base}/news`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() }
  ]
}