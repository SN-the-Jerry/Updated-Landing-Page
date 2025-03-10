import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Unicoach AI - แพลตฟอร์มเตรียมสอบเข้าโรงเรียนด้วย AI",
  description:
    "Unicoach AI ช่วยให้นักเรียนเตรียมสอบเข้าโรงเรียนได้อย่างมีประสิทธิภาพ ด้วยการวิเคราะห์จุดแข็งจุดอ่อนและสร้างแบบฝึกหัดเฉพาะบุคคล",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="th" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-ibm-plex-sans-thai">{children}</body>
    </html>
  )
}



import './globals.css'