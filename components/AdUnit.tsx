'use client'

import Script from 'next/script'

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>
  }
}

export default function AdUnit() {
  return (
    <div className="container mx-auto flex justify-center overflow-x-auto px-4">
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8517844838683220"
        crossOrigin="anonymous"
        onReady={() => {
          window.adsbygoogle = window.adsbygoogle || []
          window.adsbygoogle.push({})
        }}
      />
      <ins
        className="adsbygoogle"
        style={{ display: 'inline-block', width: 728, height: 90 }}
        data-ad-client="ca-pub-8517844838683220"
        data-ad-slot="6003313244"
      />
    </div>
  )
}
