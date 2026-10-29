import type { MetadataRoute } from 'next'
import { siteMeta } from '../lib/seo'
import { articles } from '../data/articles'
import { products } from '../data/products'
import { guides } from '../data/guides'
import { categories } from '../data/categories'
import { news } from '../data/news'

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
    '/comparisons',
  ]

  const reviewUrls = articles.map((article) => `/reviews/${article.slug}`)
  const productUrls = products
    .filter((product) => !product.reviewSlug)
    .map((product) => `/products/${product.id}`)
  const guideUrls = guides.map((guide) => `/guides/${guide.slug}`)
  const categoryUrls = categories.map((category) => category.href)
  const newsUrls = news.map((article) => `/news/${article.slug}`)

  // Merge and remove duplicates
  const pathnames = Array.from(
    new Set([
      ...staticUrls,
      ...reviewUrls,
      ...productUrls,
      ...guideUrls,
      ...categoryUrls,
      ...newsUrls,
    ])
  )

  // Map relative pathnames to full URL objects expected by Next.js
  return pathnames.map((path) => ({
    url: path ? `${base}${path}` : `${base}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '' ? 1.0 : 0.8,
  }))
}