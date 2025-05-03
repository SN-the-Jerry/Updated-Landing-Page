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
});

export { metadata, viewport };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-PG8P7JBS';

  return (
    <html lang="th" className={`scroll-smooth ${ibmPlexSansThai.className}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="stylesheet" href="/critical.css" />
        <StylesheetLoader />
      </head>
      <body className="font-ibm-plex-sans-thai">
        {children}
        <ClientScripts gtmId={gtmId} />
      </body>
    </html>
  );
}