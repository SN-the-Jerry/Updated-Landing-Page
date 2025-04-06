// components/GoogleTagManager.jsx
'use client'

import { useEffect } from 'react'

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
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
      />
      <script
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