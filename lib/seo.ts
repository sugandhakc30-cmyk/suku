
export function siteMeta() {
  return {
    siteName: 'Sugandha Tech',
    description: 'Independent technology reviews and buying guidance.',
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://sugandhatech.in.net'
  }
}

export const seoDefaults = {
  siteName: 'Sugandha Tech',
  siteUrl: 'https://sugandhatech.in.net',
  keywords: ['technology reviews', 'buying guides', 'gaming laptop reviews', 'tech buying advice']
}