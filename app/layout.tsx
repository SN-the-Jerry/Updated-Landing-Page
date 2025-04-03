import type { ReactNode } from "react"
import { Metadata } from "next"
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
  return (
    <html lang="th" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-ibm-plex-sans-thai">
        {children}
      </body>
    </html>
  )
}