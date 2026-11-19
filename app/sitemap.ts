import type { MetadataRoute } from 'next'
import { siteMeta } from '../lib/seo'
import { articles } from '../data/articles'
import { products } from '../data/products'
import { guides } from '../data/guides'
import { categories } from '../data/categories'
import { news } from '../data/news'

type SitemapEntry = MetadataRoute.Sitemap[number] & {
  changeFrequency: 'weekly'
  priority: number
}

export default async function sitemap(): Promise<SitemapEntry[]> {
  const meta = siteMeta()
  const base = meta.baseUrl.replace(/\/$/, '')

  const urlMap = new Map<string, SitemapEntry>()
  const addEntry = (path: string, lastMod?: string | Date, priority = 0.8) => {
    const fullUrl = path ? `${base}${path}` : `${base}/`

    if (!urlMap.has(fullUrl)) {
      urlMap.set(fullUrl, {
        url: fullUrl,
        ...(lastMod ? { lastModified: new Date(lastMod) } : {}),
        changeFrequency: 'weekly',
        priority,
      })
    }
  }

  const staticUrls = [
    '',
    '/reviews',
    '/guides',
    '/news',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/cookie-policy',
    '/editorial-policy',
    '/affiliate-disclosure',
    '/best',
    '/comparisons',
  ]

  staticUrls.forEach((path) => addEntry(path, undefined, path === '' ? 1.0 : 0.8))

  articles.forEach((article) =>
    addEntry(`/reviews/${article.slug}`, article.updated ?? article.date)
  )
  guides.forEach((guide) => addEntry(`/guides/${guide.slug}`, guide.date))
  news.forEach((article) => addEntry(`/news/${article.slug}`, article.date))
  products
    .filter((product) => !product.reviewSlug)
    .forEach((product) => addEntry(`/products/${product.id}`))
  categories.forEach((category) => addEntry(category.href))

  return Array.from(urlMap.values())
}