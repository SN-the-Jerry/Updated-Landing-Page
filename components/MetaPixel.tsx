'use client'

import { useEffect } from 'react';

interface MetaPixelProps {
  pixelId: string;
}

declare global {
  interface Window {
    fbq: any;
  }
}

export default function MetaPixel({ pixelId }: MetaPixelProps) {
  useEffect(() => {
    // Only run this on the client side
    if (typeof window !== 'undefined') {
      // Initialize Meta Pixel if it doesn't exist
      if (!window.fbq) {
        window.fbq = function() {
          window.fbq.callMethod ?
            window.fbq.callMethod.apply(window.fbq, arguments) :
            window.fbq.queue.push(arguments);
        };
        
        if (!window.fbq.queue) {
          window.fbq.queue = [];
        }
      }

      // Initialize the Meta Pixel
      window.fbq('init', 4171444363089620);
      
      // Track the page view
      window.fbq('track', 'PageView');
      
      // Log success message
      console.log(`Meta Pixel ${pixelId} initialized successfully`);
    }
  }, [pixelId]);

  return (
    <>
      {/* Meta Pixel noscript fallback code */}
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{ display: 'none' }} 
          src={`https://www.facebook.com/tr?id=4171444363089620&ev=PageView&noscript=1`}
          alt="" 
        />
      </noscript>
    </>
  );
}