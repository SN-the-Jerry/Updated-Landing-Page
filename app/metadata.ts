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
        canonical: 'https://unicoach.cc',
        languages: {
            'th-TH': 'https://unicoach.cc',
        },
    },
     openGraph: {
        type: 'website',
        locale: 'th_TH',
        url: 'https://unicoach.cc',
        title: 'Unicoach AI | แพลตฟอร์มเตรียมสอบเข้าด้วย AI',
        description: 'แพลตฟอร์ม AI ที่ช่วยให้นักเรียนเตรียมสอบเข้าโรงเรียนชั้นนำได้อย่างมีประสิทธิภาพ ด้วยการวิเคราะห์จุดแข็งจุดอ่อนและสร้างแบบฝึกหัดเฉพาะบุคคล',
        siteName: 'Unicoach AI',
        images: [
            {
                url: 'https://unicoach.cc/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Unicoach AI Logo',
            },
        ],
    }, 
    
    //favicon configuration
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any' }, // Primary favicon
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        ],
        apple: [
            { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
        shortcut: [
            { url: '/favicon.ico' }
        ],
        other: [
            {
                rel: 'mask-icon',
                url: '/safari-pinned-tab.svg',
                color: '#FF6B00',
            },
        ],
    },
    manifest: '/site.webmanifest',
    verification: {
        google: 'google-site-verification-code', // Replace with your actual verification code
         other: {
            'facebook-domain-verification': 'rk9ftxalfwfe4ojwwxgfgm4897u9ev'
        }
    },
    other: {
        'theme-color': '#FF6B00', // Primary color from your CSS
        'msapplication-TileColor': '#FF6B00',
        'msapplication-config': '/browserconfig.xml',
    },
};