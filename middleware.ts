import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const canonicalHost = 'sugandhatech.in.net'
const canonicalProductRedirects: Record<string, string> = {
  'hp-omen-16-rtx-5070-ryzen-9-8940hx-review': '/reviews/hp-omen-rtx-5070-gaming-laptop-review'
}

export function middleware(request: NextRequest) {
  const { nextUrl } = request
  const forwardedProto = request.headers.get('x-forwarded-proto')
  const isProductionHost = nextUrl.hostname === canonicalHost || nextUrl.hostname === `www.${canonicalHost}`

  if (isProductionHost && (nextUrl.hostname !== canonicalHost || nextUrl.protocol === 'http:' || forwardedProto === 'http')) {
    const canonicalUrl = nextUrl.clone()
    canonicalUrl.hostname = canonicalHost
    canonicalUrl.protocol = 'https:'
    return NextResponse.redirect(canonicalUrl, 308)
  }

  const productId = request.nextUrl.pathname.split('/')[2]
  const reviewPath = canonicalProductRedirects[productId]

  if (reviewPath) {
    return NextResponse.redirect(new URL(reviewPath, request.url), 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/products/:path*']
}
