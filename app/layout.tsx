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
  const lineTagId = process.env.NEXT_PUBLIC_LINE_TAG_ID || 'eec77ff1-d224-4314-a629-c68284667dec';

  return (
    <html lang="th" className={`scroll-smooth ${ibmPlexSansThai.className}`} suppressHydrationWarning={true}>
      <head>
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
        <link rel="preconnect" href="https://d.line-scdn.net" crossOrigin="" />
      </head>
      <body className="font-ibm-plex-sans-thai">
        {children}
        <ClientScripts gtmId={gtmId} metaPixelId={metaPixelId} lineTagId={lineTagId}/>
      </body>
    </html>
  );
}