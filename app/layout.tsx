import type { ReactNode } from "react"
import { Metadata, Viewport } from "next"
import GoogleTagManager from '@/components/GoogleTagManager'
import "./globals.css"

// Add this separate viewport export
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: 'Unicoach AI | แพลตฟอร์มเตรียมสอบเข้าด้วย AI สำหรับนักเรียน ม.1 และ ม.4',
  description: 'Unicoach AI ช่วยให้นักเรียนเตรียมสอบเข้าโรงเรียนชั้นนำได้อย่างมีประสิทธิภาพ ด้วยการวิเคราะห์จุดแข็งจุดอ่อนและสร้างแบบฝึกหัดเฉพาะบุคคล',
  keywords: 'เตรียมสอบเข้า, สอบเข้าม.1, สอบเข้าม.4, แนวข้อสอบ, ติวสอบ, AI การศึกษา, เตรียมอุดมศึกษา, สวนกุหลาบวิทยาลัย, มหิดลวิทยานุสรณ์',
  authors: [{ name: 'Unicoach AI' }],
  category: 'education',
  creator: 'Unicoach AI',
  publisher: 'Unicoach AI',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://unicoach.ai',
    languages: {
      'th-TH': 'https://unicoach.ai',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    url: 'https://unicoach.ai',
    title: 'Unicoach AI | แพลตฟอร์มเตรียมสอบเข้าด้วย AI',
    description: 'แพลตฟอร์ม AI ที่ช่วยให้นักเรียนเตรียมสอบเข้าโรงเรียนชั้นนำได้อย่างมีประสิทธิภาพ ด้วยการวิเคราะห์จุดแข็งจุดอ่อนและสร้างแบบฝึกหัดเฉพาะบุคคล',
    siteName: 'Unicoach AI',
    images: [
      {
        url: 'https://unicoach.ai/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Unicoach AI Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unicoach AI | แพลตฟอร์มเตรียมสอบเข้าด้วย AI',
    description: 'แพลตฟอร์ม AI ที่ช่วยให้นักเรียนเตรียมสอบเข้าโรงเรียนชั้นนำได้อย่างมีประสิทธิภาพ',
    images: ['https://unicoach.ai/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-16x16.png',
  },
  manifest: 'https://unicoach.ai/site.webmanifest',
  // Remove viewport from here
  verification: {
    google: 'google-site-verification-code', // Replace with your actual verification code
    yandex: 'yandex-verification-code', // Replace with your actual verification code if you use Yandex
  },
  other: {
    'theme-color': '#FF6B00', // Primary color from your CSS
  },
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
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#FF6B00" />
        <meta name="msapplication-TileColor" content="#FF6B00" />
      </head>
      <body className="font-ibm-plex-sans-thai">
        {children}
      </body>
    </html>
  )
}