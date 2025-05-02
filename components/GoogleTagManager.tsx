'use client'
import { useEffect } from 'react'
import Script from 'next/script'

interface GoogleTagManagerProps {
  gtmId: string;
}

export default function GoogleTagManager({ gtmId }: GoogleTagManagerProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || []
      function gtag(...args: any[]) {
        window.dataLayer.push(args)
      }
      gtag('js', new Date())
      gtag('config', gtmId)
    }
  }, [gtmId])

  // Only render scripts on client side
  if (typeof window === 'undefined') {
    return null;
  }

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
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `,
        }}
      />
    </>
  )
}