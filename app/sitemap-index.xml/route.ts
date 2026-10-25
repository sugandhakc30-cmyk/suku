import { siteMeta } from '../../lib/seo'

export function GET() {
  const baseUrl = siteMeta().baseUrl.replace(/\/$/, '')
  const sitemapUrl = `${baseUrl}/sitemap.xml`.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&apos;',
    }

    return entities[character]
  })

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${sitemapUrl}</loc>
  </sitemap>
</sitemapindex>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
