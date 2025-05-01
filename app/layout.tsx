"use client"
import GoogleTagManager from '@/components/GoogleTagManager'
import "./globals.css"
import { IBM_Plex_Sans_Thai } from 'next/font/google';
import Script from 'next/script';
import { useEffect } from 'react';

// Initialize the font
const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['thai', 'latin'],
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-PG8P7JBS';

  // Server-side rendering needs consistent HTML structure
  return (
    <html lang="th" className={`scroll-smooth ${ibmPlexSansThai.className}`}>
      <head>
        {process.env.NODE_ENV === 'development' && (
          <Script
            src="https://localhost:8097"
            strategy="beforeInteractive"
          />
        )}
      </head>
      <body className="font-ibm-plex-sans-thai">
        {children}
        {/* Place GTM after content to avoid hydration issues */}
        <ClientSideScripts gtmId={gtmId} />
      </body>
    </html>
  );
}
function ClientSideScripts({ gtmId }: { gtmId: string }) {
  useEffect(() => {
    // Client-side initialization logic here
    console.log('Client-side scripts initialized');
  }, []);

  return <GoogleTagManager gtmId={gtmId} />;
}