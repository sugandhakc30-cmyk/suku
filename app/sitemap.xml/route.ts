import { NextResponse } from 'next/server'

export async function GET() {
  const sitemapXml = `<?xmlversion="1.0"encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://sugandhatech.in.net/</loc>
  </url>
  <url>
    <loc>https://sugandhatech.in.net/reviews</loc>
  </url>
  <url>
    <loc>https://sugandhatech.in.net/guides</loc>
  </url>
  <url>
    <loc>https://sugandhatech.in.net/news</loc>
  </url>
  <url>
    <loc>https://sugandhatech.in.net/about</loc>
  </url>
  <url>
    <loc>https://sugandhatech.in.net/contact</loc>
  </url>
</urlset>`

  return new NextResponse(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}