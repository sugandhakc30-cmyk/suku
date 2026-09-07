import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const canonicalProductRedirects: Record<string, string> = {
  'hp-omen-16-rtx-5070-ryzen-9-8940hx-review': '/reviews/hp-omen-rtx-5070-gaming-laptop-review'
}

export function middleware(request: NextRequest) {
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
