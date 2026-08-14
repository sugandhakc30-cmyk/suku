
import { articles } from '../data/articles'
import { guides } from '../data/guides'

export type SearchResult = {
  id: string
  title: string
  excerpt: string
  category: string
  slug: string
  href: string
  date?: string
}

export function searchAll(query: string): SearchResult[] {
  const q = query.trim().toLowerCase()
  if (!q) return []
  const results: SearchResult[] = []

  function pushFromList(list: any[], type: string, base: string) {
    for (const item of list) {
      const hay = (item.title + ' ' + (item.excerpt || '') + ' ' + (item.category || '')).toLowerCase()
      if (hay.includes(q)) {
        results.push({
          id: `${type}-${item.slug}`,
          title: item.title,
          excerpt: item.excerpt || '',
          category: type,
          slug: item.slug,
          href: `/${base}/${item.slug}`,
          date: item.date
        })
      }
    }
  }

  pushFromList(articles, 'review', 'reviews')
  pushFromList(guides, 'guide', 'guides')

  return results.slice(0, 50)
}