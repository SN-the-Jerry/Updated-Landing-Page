'use client'

import Script from 'next/script';

interface MetaPixelScriptProps {
  pixelId: string;
}

export default function MetaPixelScript({ pixelId }: MetaPixelScriptProps) {
  return (
    <>
      {/* Meta Pixel Base Code */}
      <Script id="meta-pixel-script" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${4171444363089620}');
          fbq('track', 'PageView');
        `}
      </Script>
    </>
  );
}