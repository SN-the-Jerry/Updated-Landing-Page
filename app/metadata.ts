import { Metadata, Viewport } from "next"

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
};

export const metadata: Metadata = {
    title: 'Unicoach AI | แพลตฟอร์มเตรียมสอบเข้าด้วย AI',
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
        icon: [
            { url: '/favicon.ico', sizes: '32x32' },
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        ],
        apple: [
            { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
        shortcut: '/favicon.ico',
        other: [
            {
                rel: 'icon',
                url: '/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                rel: 'icon',
                url: '/android-chrome-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    },
    manifest: '/site.webmanifest',
    verification: {
        google: 'google-site-verification-code', // Replace with your actual verification code
        yandex: 'yandex-verification-code', // Replace with your actual verification code if you use Yandex
    },
    other: {
        'theme-color': '#FF6B00', // Primary color from your CSS
    },
};