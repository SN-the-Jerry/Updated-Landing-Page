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
        icon: '/favicon_io/favicon.ico',
        apple: '/favicon_io/apple-touch-icon.png',
        shortcut: '/favicon_io/favicon-16x16.png',
    },
    manifest: '/favicon_io/site.webmanifest',
    verification: {
        google: 'google-site-verification-code', // Replace with your actual verification code
        yandex: 'yandex-verification-code', // Replace with your actual verification code if you use Yandex
    },
    other: {
        'theme-color': '#FF6B00', // Primary color from your CSS
    },
};