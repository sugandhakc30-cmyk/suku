import type { MetadataRoute } from 'next'
import { siteMeta } from '../lib/seo'
import { articles } from '../data/articles'
import { products } from '../data/products'
import { guides } from '../data/guides'
import { categories } from '../data/categories'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const meta = siteMeta()
  const base = meta.baseUrl.replace(/\/$/, '')

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
    '/comparisons'
  ]

  const reviewUrls = articles.map((article) => `/reviews/${article.slug}`)
  const productUrls = products.map((product) => `/products/${product.id}`)
  const guideUrls = guides.map((guide) => `/guides/${guide.slug}`)
  const categoryUrls = categories.map((category) => category.href)

  const uniqueUrls = [...new Set([
    ...staticUrls,
    ...reviewUrls,
    ...productUrls,
    ...guideUrls,
    ...categoryUrls
  ])]

  return uniqueUrls.map((path) => ({
    url: `${base}${path === '' ? '' : path}`,
    lastModified: new Date()
  }))
}