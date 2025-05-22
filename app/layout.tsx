import "./globals.css"
import { IBM_Plex_Sans_Thai } from 'next/font/google';
import ClientScripts from '../components/ClientScripts';
import StylesheetLoader from '@/components/StylesheetLoader';

import { metadata, viewport } from "./metadata";
// Initialize the font
const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  weight: ['400', '500', '700'],
  subsets: ['thai', 'latin'],
  display: 'swap',
  variable: '--font-ibm-plex-sans-thai', // Add variable for font-family
  preload: true, // Ensure preloading
});

export { metadata, viewport };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-PG8P7JBS';
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID || '4171444363089620';

  return (
    <html lang="th" className={`scroll-smooth ${ibmPlexSansThai.className}`} suppressHydrationWarning={true}>
      <head>
        {/* Favicon and icons - comprehensive setup */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Multiple favicon sizes for better compatibility */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        
        {/* Force favicon refresh with cache busting */}
        <link rel="shortcut icon" href={`/favicon.ico?v=${Date.now()}`} />
        
        <link rel="stylesheet" href="/critical.css" />

        <link rel="preconnect" href="/" />
        <link rel="preload" href="/4.webp" as="image" />
        <StylesheetLoader />
        {/* Preconnect to unicoach.cc domain */}
        <link rel="preconnect" href="https://unicoach.cc" crossOrigin="" />
        {/* Add DNS prefetch for Google fonts */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        {/* Preconnect to Google Tag Manager */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />
        {/* Preconnect to Meta Pixel domain */}
        <link rel="preconnect" href="https://connect.facebook.net" crossOrigin="" />
      </head>
      <body className="font-ibm-plex-sans-thai">
        {children}
        <ClientScripts gtmId={gtmId} metaPixelId={metaPixelId} />
      </body>
    </html>
  );
}