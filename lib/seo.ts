
const fallbackBaseUrl = 'https://sugandhatech.in.net'

function getBaseUrl() {
  const configuredBaseUrl = process.env.NEXT_PUBLIC_BASE_URL?.trim()

  if (!configuredBaseUrl) {
    return fallbackBaseUrl
  }

  try {
    const url = new URL(configuredBaseUrl)

    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
      return fallbackBaseUrl
    }

    return url.toString().replace(/\/$/, '')
  } catch {
    return fallbackBaseUrl
  }
}

export function siteMeta() {
  return {
    siteName: 'Sugandha Tech',
    description: 'Independent technology reviews and buying guidance.',
    baseUrl: getBaseUrl()
  }
}

export const seoDefaults = {
  siteName: 'Sugandha Tech',
  siteUrl: 'https://sugandhatech.in.net',
  keywords: ['technology reviews', 'buying guides', 'gaming laptop reviews', 'tech buying advice']
}