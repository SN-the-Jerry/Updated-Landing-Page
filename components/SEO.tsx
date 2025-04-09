import React from 'react'
import Head from 'next/head'
import StructuredData from './StructuredData'

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  ogType?: string
  twitterHandle?: string
}

export default function SEO({
  title = 'Unicoach AI | แพลตฟอร์มเตรียมสอบเข้าด้วย AI สำหรับนักเรียน ม.1 และ ม.4',
  description = 'Unicoach AI ช่วยให้นักเรียนเตรียมสอบเข้าโรงเรียนชั้นนำได้อย่างมีประสิทธิภาพ ด้วยการวิเคราะห์จุดแข็งจุดอ่อนและสร้างแบบฝึกหัดเฉพาะบุคคล',
  canonical = 'https://unicoach.ai',
  ogImage = 'https://unicoach.ai/og-image.jpg',
  ogType = 'website',
  twitterHandle = '@unicoach'
}: SEOProps) {
  // FAQ data for structured data
  const faqData = {
    questions: [
      {
        question: "Unicoach AI เหมาะกับนักเรียนระดับไหนบ้าง?",
        answer: "Unicoach AI เหมาะสำหรับนักเรียนที่ต้องการเตรียมสอบเข้าโรงเรียนระดับชั้น ม.1 และ ม.4 โดยมีเนื้อหาและแบบฝึกหัดที่ปรับให้เหมาะกับแต่ละระดับชั้น"
      },
      {
        question: "AI วิเคราะห์จุดแข็งจุดอ่อนได้แม่นยำแค่ไหน?",
        answer: "AI ของเราพัฒนาจากข้อมูลการทำข้อสอบของนักเรียนหลายหมื่นคน และมีความแม่นยำในการวิเคราะห์จุดแข็งจุดอ่อนสูงถึง 95% โดยสามารถระบุหัวข้อและทักษะย่อยที่นักเรียนต้องพัฒนาได้อย่างเฉพาะเจาะจง"
      },
      {
        question: "มีการรับประกันผลการสอบหรือไม่?",
        answer: "สำหรับแพ็คเกจพรีเมียม เรามีการรับประกันผลการสอบ หากนักเรียนทำตามแผนการเรียนที่กำหนดอย่างเคร่งครัดและไม่สามารถสอบผ่านได้ เราจะคืนเงินให้ 100% ตามเงื่อนไขที่กำหนด"
      },
      {
        question: "สามารถใช้งานบนอุปกรณ์ใดได้บ้าง?",
        answer: "Unicoach AI สามารถใช้งานได้บนทุกอุปกรณ์ผ่านแอพ LINE ไม่ว่าจะเป็นสมาร์ทโฟน แท็บเล็ต หรือคอมพิวเตอร์ ทำให้นักเรียนสามารถเรียนรู้ได้ทุกที่ทุกเวลา"
      }
    ]
  };

  // Organization data for structured data
  const organizationData = {
    name: 'Unicoach AI',
    url: 'https://unicoach.ai',
    logo: 'https://unicoach.ai/logo.svg',
    sameAs: [
      'https://facebook.com/unicoach.ai',
      'https://tiktok.com/@unicoach'
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+66-91-782-4562',
        email: 'admin@uniclass.io',
        contactType: 'customer service'
      }
    ]
  };

  // Website data for structured data
  const websiteData = {
    name: 'Unicoach AI',
    url: 'https://unicoach.ai'
  };

  // Service data for structured data
  const serviceData = {
    name: 'Unicoach AI สำหรับเตรียมสอบเข้า',
    description: 'แพลตฟอร์ม AI ที่ช่วยให้นักเรียนเตรียมสอบเข้าโรงเรียนชั้นนำได้อย่างมีประสิทธิภาพ',
    providerName: 'Unicoach AI',
    providerUrl: 'https://unicoach.ai',
    serviceType: 'Education Technology',
    areaServed: 'Thailand'
  };

  return (
    <>
      <Head>
        {/* Additional meta tags not covered by Next.js Metadata */}
        <meta name="author" content="Unicoach AI" />
        <meta name="copyright" content={`Copyright © ${new Date().getFullYear()} Unicoach AI`} />
      </Head>

      {/* Structured Data */}
      <StructuredData type="Organization" data={organizationData} />
      <StructuredData type="WebSite" data={websiteData} />
      <StructuredData type="FAQPage" data={faqData} />
      <StructuredData type="Service" data={serviceData} />
    </>
  )
}