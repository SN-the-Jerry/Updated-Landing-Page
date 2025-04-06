import type { ReactNode } from "react"
import { Metadata } from "next"
import GoogleTagManager from '@/components/GoogleTagManager'
import "./globals.css"

export const metadata = {
  title: 'Unicoach AI',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-PG8P7JBS'

  return (
    <html lang="th" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <GoogleTagManager gtmId={gtmId} />
      </head>
      <body className="font-ibm-plex-sans-thai">
        {children}
      </body>
    </html>
  )
}