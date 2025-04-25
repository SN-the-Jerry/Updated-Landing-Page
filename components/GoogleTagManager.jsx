// components/GoogleTagManager.jsx
'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export default function GoogleTagManager({ gtmId }) {
  useEffect(() => {
    window.dataLayer = window.dataLayer || []
    function gtag() {
      dataLayer.push(arguments)
    }
    gtag('js', new Date())
    gtag('config', gtmId)
  }, [gtmId])

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
      />
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtmId}');
          `,
        }}
      />
    </>
  )
}