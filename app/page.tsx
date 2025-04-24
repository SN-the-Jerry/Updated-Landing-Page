"use client"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, BarChart, Users, TrendingUp, DollarSign, Facebook, Mail, Phone } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react";
import SEO from "@/components/SEO" // Import the SEO component


// Define custom animations for Tailwind CSS
const customAnimations = {
  fadeIn: "opacity-0 animate-[fadeIn_1s_ease-in-out_forwards]",
  slideUp: "translate-y-4 opacity-0 animate-[slideUp_0.5s_ease-out_forwards]",
  slideInLeft: "opacity-0 -translate-x-4 animate-[slideInLeft_0.5s_ease-out_forwards]",
  slideInRight: "opacity-0 translate-x-4 animate-[slideInRight_0.5s_ease-out_forwards]",
  float: "animate-[float_3s_ease-in-out_infinite]",
  floatDelayed: "animate-[float_3s_ease-in-out_infinite_0.5s]",
  bounceSubtle: "animate-[bounceSubtle_2s_ease-in-out_infinite]",
  slideDown: "animate-[slideDown_0.3s_ease-out_forwards]"
};

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'testEvent',
      'testVariable': 'test value'
    });
    console.log('Test event pushed to dataLayer');
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Pre-defined colors for items that need dynamic styling
  const itemColors = {
    cyan: {
      from: "from-cyan-400",
      to: "to-cyan-600",
      bg: "bg-cyan-50",
      text: "text-cyan-600",
      border: "border-cyan-200"
    },
    blue: {
      from: "from-blue-400",
      to: "to-blue-600",
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-200"
    },
    indigo: {
      from: "from-indigo-400",
      to: "to-indigo-600",
      bg: "bg-indigo-50",
      text: "text-indigo-600",
      border: "border-indigo-200"
    },
    violet: {
      from: "from-violet-400",
      to: "to-violet-600",
      bg: "bg-violet-50",
      text: "text-violet-600",
      border: "border-violet-200"
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-gray-50">

      {/* SEO Component */}
      <SEO
        title="Unicoach AI | แพลตฟอร์มเตรียมสอบเข้าด้วย AI สำหรับนักเรียน ม.1 และ ม.4"
        description="Unicoach AI ช่วยให้นักเรียนเตรียมสอบเข้าโรงเรียนชั้นนำได้อย่างมีประสิทธิภาพ ด้วยการวิเคราะห์จุดแข็งจุดอ่อนและสร้างแบบฝึกหัดเฉพาะบุคคล"
        canonical="https://unicoach.ai"
        ogImage="https://unicoach.ai/og-image.jpg"
        ogType="website"
        twitterHandle="@unicoach"
      />

      {/* Navbar - Updated with cleaner design */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-50 via-white to-violet-50 border-b border-blue-200 shadow-md">
        <div className="container mx-auto px-6 h-16 relative flex items-center justify-between">
          {/* Mobile Menu Button - Positioned to the left */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="flex flex-col items-center justify-center w-10 h-10 rounded-lg hover:bg-blue-100 transition-all duration-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-0.5 bg-blue-600 rounded-full transition-all duration-300 mb-1 ${isMobileMenuOpen ? "transform rotate-45 translate-y-1.5" : ""}`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-blue-600 rounded-full transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-blue-600 rounded-full transition-all duration-300 mt-1 ${isMobileMenuOpen ? "transform -rotate-45 -translate-y-1.5" : ""}`}
              ></span>
            </button>
          </div>

          {/* Desktop Navigation Links - Centered */}
          <div className="hidden md:flex justify-center items-center absolute left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-8">
              <a href="#hero_section" className="text-blue-700 font-medium hover:text-violet-600 transition-colors">
                หน้าแรก
              </a>
              <a href="#about" className="text-blue-700 font-medium hover:text-violet-600 transition-colors">
                เกี่ยวกับเรา
              </a>
              <a href="#faq" className="text-blue-700 font-medium hover:text-violet-600 transition-colors">
                คำถามที่พบบ่อย
              </a>
              <a href="#cta" className="text-blue-700 font-medium hover:text-violet-600 transition-colors">
                ช่องทางการติดต่อ
              </a>
            </div>
          </div>

          {/* Logo - Right side on mobile, left side on desktop */}
          <div className="flex items-center w-[120px] h-[30px] md:absolute md:left-6 md:top-1/2 md:transform md:-translate-y-1/2">
            <Image
              src="/logo.svg"
              alt="Unicoach AI Logo"
              width={140}
              height={50}
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Mobile Menu - Updated with cleaner look */}
        {isMobileMenuOpen && (
          <div className={`md:hidden ${customAnimations.slideDown}`}>
            <div className="bg-white border-t border-blue-100">
              <div className="container mx-auto px-4 py-2">
                <a
                  href="#hero_section"
                  className="block text-gray-700 py-4 px-4 border-b border-blue-50 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center"
                >
                  <span className="text-blue-400 mr-3">01</span>
                  หน้าแรก
                </a>
                <a
                  href="#about"
                  className="block text-gray-700 py-4 px-4 border-b border-blue-50 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center"
                >
                  <span className="text-blue-400 mr-3">03</span>
                  เกี่ยวกับเรา
                </a>
                <a
                  href="#faq"
                  className="block text-gray-700 py-4 px-4 border-b border-blue-50 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center"
                >
                  <span className="text-blue-400 mr-3">02</span>
                  คำถามที่พบบ่อย
                </a>
                <a
                  href="#cta"
                  className="block text-gray-700 py-4 px-4 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center"
                >
                  <span className="text-blue-400 mr-3">04</span>
                  ช่องทางการติดต่อ
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>


      {/* Hero Section - With balanced typography and improved image display */}
      <section id="hero_section" className="bg-gradient-to-br from-blue-50 to-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                สอบติดโรงเรียนในฝัน เริ่มต้นได้ที่นี่
              </h1>
              <p className="text-base text-gray-700 mb-8 leading-relaxed">
                Unicoach AI แพลตฟอร์มเตรียมสอบด้วย AI ที่วิเคราะห์จุดแข็ง–จุดอ่อน พร้อมสร้างแบบฝึกหัดเฉพาะตัว เพื่อพัฒนาศักยภาพและพิชิตสนามสอบอย่างมั่นใจ
              </p>

              <div className="flex flex-col sm:flex-row gap-5">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-[220px]"
                >
                  <div className="absolute inset-0 bg-blue-600 rounded-xl blur opacity-20 transform rotate-1"></div>
                  <button className="relative w-full py-2 px-4 bg-white border-2 border-blue-600 text-blue-600 font-medium rounded-xl flex items-center justify-center space-x-3 shadow-md hover:bg-blue-50 transition-all duration-300">
                    <BookOpen size={16} />
                    <span className="text-base">เริ่มฝึกทำข้อสอบ</span>
                  </button>
                </motion.div>
              </div>
            </div>

            {/* Image display - Larger display with proper positioning */}
            <div className="relative h-[380px] md:h-[400px] lg:h-[410px] w-full">
              <div className="absolute inset-0 rounded-2xl bg-blue-100/30 border border-blue-200"></div>
              <Image
                src="/4.png"
                alt="นักเรียนกำลังใช้ Unicoach AI"
                fill
                className="object-contain p-2"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={80}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem-Solution Section - Ultra Modern Design with Animation */}
      <section id="about" className="py-30 bg-slate-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute w-64 h-64 rounded-full bg-fuchsia-200 opacity-30 -top-20 -left-20 blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 rounded-full bg-blue-200 opacity-30 -bottom-40 -right-20 blur-3xl animate-pulse"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className={`text-4xl md:text-5xl font-bold text-slate-800 ${customAnimations.slideUp}`}>เปรียบเทียบการเตรียมสอบ</h2>
            <p className={`mt-4 text-slate-600 ${customAnimations.fadeIn}`}>ค้นพบความแตกต่างระหว่างวิธีเตรียมสอบแบบเดิมกับเทคโนโลยี AI ที่จะยกระดับการเรียนรู้ของคุณ</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Traditional Method Card */}
            <div className={`rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 p-1 shadow-lg group hover:shadow-xl transition-all duration-500 ${customAnimations.slideInLeft}`}>
              <div className="bg-white h-full rounded-xl overflow-hidden flex flex-col">
                <div className="bg-rose-500 p-6 text-white">
                  <h3 className="text-2xl font-bold flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    การเตรียมสอบแบบเดิม
                  </h3>
                  <p className="mt-2 text-rose-100">วิธีการเรียนแบบดั้งเดิมที่ไม่ตอบโจทย์ในยุคดิจิทัล</p>
                </div>

                <div className="p-6 space-y-4 flex-grow">
                  {[
                    {
                      title: "เรียนแบบไม่ตรงจุด",
                      desc: "ใช้เวลาส่วนใหญ่กับเนื้อหาที่ไม่จำเป็นและไม่ตรงกับจุดอ่อนที่แท้จริง",
                      icon: "📚"
                    },
                    {
                      title: "ค่าใช้จ่ายสูงเกินจำเป็น",
                      desc: "เสียเงินหลายหมื่นบาทต่อเดือนสำหรับคอร์สเรียนที่ขาดประสิทธิภาพ",
                      icon: "💸"
                    },
                    {
                      title: "ไม่มีข้อมูลความก้าวหน้า",
                      desc: "ไม่สามารถติดตามการพัฒนาได้อย่างเป็นระบบและเห็นผลชัดเจน",
                      icon: "📉"
                    },
                    {
                      title: "ขาดความเฉพาะเจาะจง",
                      desc: "เนื้อหาและแบบฝึกหัดเป็นแบบทั่วไป ไม่เจาะจงกับโรงเรียนที่ต้องการสอบเข้า",
                      icon: "🎯"
                    },
                    {
                      title: "ไม่ยืดหยุ่นด้านเวลา",
                      desc: "ต้องเรียนตามตารางเวลาที่กำหนด ไม่สามารถปรับเปลี่ยนได้ตามความต้องการ",
                      icon: "⏰"
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex group/item hover:bg-slate-50 p-3 rounded-xl transition-all">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mr-4 text-xl group-hover/item:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">{item.title}</h4>
                        <p className="text-slate-600 text-sm mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-50 p-4 text-center">
                  <span className="text-slate-500 text-sm font-medium">วิธีการเรียนแบบเดิมที่ไม่ตอบโจทย์ในยุคปัจจุบัน</span>
                </div>
              </div>
            </div>

            {/* Unicoach AI Card */}
            <div className={`rounded-2xl bg-gradient-to-br from-violet-500 to-blue-500 p-1 shadow-lg group hover:shadow-xl transition-all duration-500 ${customAnimations.slideInRight}`}>
              <div className="bg-white h-full rounded-xl overflow-hidden flex flex-col">
                <div className="bg-gradient-to-r from-violet-600 to-blue-600 p-6 text-white">
                  <h3 className="text-2xl font-bold flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Unicoach AI
                  </h3>
                  <p className="mt-2 text-blue-100">นวัตกรรมการเรียนรู้ที่ปรับเปลี่ยนตามความต้องการของคุณ</p>
                </div>

                <div className="p-6 space-y-4 flex-grow">
                  {[
                    {
                      title: "เรียนรู้แบบเฉพาะบุคคล",
                      desc: "AI วิเคราะห์และระบุจุดอ่อนเฉพาะตัว พร้อมสร้างแผนการเรียนที่เหมาะสมที่สุด",
                      icon: "🤖"
                    },
                    {
                      title: "ประหยัดค่าใช้จ่าย",
                      desc: "คุ้มค่ากว่าการเรียนพิเศษแบบเดิมถึง 80% ด้วยประสิทธิภาพที่เหนือกว่า",
                      icon: "💰"
                    },
                    {
                      title: "ติดตามความก้าวหน้า",
                      desc: "แดชบอร์ดอัจฉริยะที่แสดงผลการพัฒนาแบบเรียลไทม์ด้วยกราฟและสถิติ",
                      icon: "📊"
                    },
                    {
                      title: "ข้อสอบเฉพาะโรงเรียน",
                      desc: "ฐานข้อมูลแนวข้อสอบเฉพาะโรงเรียนที่อัปเดตล่าสุดทุกปี",
                      icon: "🎓"
                    },
                    {
                      title: "เรียนได้ทุกที่ทุกเวลา",
                      desc: "เข้าถึงได้ตลอด 24 ชั่วโมงทุกอุปกรณ์ ไม่มีข้อจำกัดด้านเวลาและสถานที่",
                      icon: "🌐"
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex group/item hover:bg-slate-50 p-3 rounded-xl transition-all">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-violet-100 to-blue-100 flex items-center justify-center mr-4 text-xl group-hover/item:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">{item.title}</h4>
                        <p className="text-slate-600 text-sm mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-violet-50 to-blue-50 p-4 text-center">
                  <button className="bg-gradient-to-r from-violet-600 to-blue-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                    เริ่มต้นใช้งานฟรี
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Ultra Modern Design with Animation */}
      <section id="how-it-works" className="py-24 bg-gray-20 relative overflow-hidden">
        {/* Animated decorative elements */}
        <div className="absolute w-full h-1/3 bg-gradient-to-b from-cyan-50 to-transparent top-0 left-0"></div>
        <div className={`absolute w-40 h-40 bg-cyan-200 rounded-full opacity-20 top-20 left-10 blur-2xl ${customAnimations.float}`}></div>
        <div className={`absolute w-60 h-60 bg-blue-200 rounded-full opacity-20 bottom-20 right-10 blur-2xl ${customAnimations.floatDelayed}`}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className={`text-4xl md:text-5xl font-bold text-slate-800 ${customAnimations.slideUp}`}>วิธีการใช้งาน Unicoach AI</h2>
            <p className={`mt-4 text-slate-600 ${customAnimations.fadeIn}`}>เริ่มต้นใช้งานง่ายๆ เพียงไม่กี่ขั้นตอน</p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 transform -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                {
                  title: "เลือกโรงเรียน",
                  desc: "เลือกโรงเรียนที่ต้องการสอบเข้าจากฐานข้อมูลโรงเรียนชั้นนำทั่วประเทศ",
                  icon: "🏫",
                  color: "cyan",
                  number: "01"
                },
                {
                  title: "ทำแบบทดสอบ",
                  desc: "ทำแบบทดสอบประเมินความรู้พื้นฐานเพื่อให้ AI ระบุจุดแข็งและจุดอ่อน",
                  icon: "📝",
                  color: "blue",
                  number: "02"
                },
                {
                  title: "รับผลวิเคราะห์",
                  desc: "AI วิเคราะห์ผลการทดสอบและระบุจุดที่ต้องพัฒนาอย่างเฉพาะเจาะจง",
                  icon: "🔍",
                  color: "indigo",
                  number: "03"
                },
                {
                  title: "ฝึกฝนเฉพาะตัว",
                  desc: "รับแบบฝึกหัดที่ปรับให้เหมาะกับคุณและโรงเรียนที่ต้องการสอบเข้า",
                  icon: "🎯",
                  color: "violet",
                  number: "04"
                }
              ].map((item, index) => (
                <div key={index} className={`opacity-0 ${index === 0 ? "animate-[fadeInUp_0.5s_ease-out_forwards]" :
                  index === 1 ? "animate-[fadeInUp_0.5s_ease-out_forwards_0.2s]" :
                    index === 2 ? "animate-[fadeInUp_0.5s_ease-out_forwards_0.4s]" :
                      "animate-[fadeInUp_0.5s_ease-out_forwards_0.6s]"}`}>
                  <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:-translate-y-2">
                    {/* Gradient top border */}
                    <div className={`h-2 bg-gradient-to-r ${itemColors[item.color].from} ${itemColors[item.color].to} w-full`}></div>

                    <div className="p-8">
                      <div className="flex items-center mb-6">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${itemColors[item.color].from} ${itemColors[item.color].to} text-white mr-4 shadow-lg group-hover:scale-110 transition-transform`}>
                          {item.icon}
                        </div>
                        <div className="relative">
                          <div className={`absolute -top-6 -left-2 text-${item.color}-100 font-bold text-5xl opacity-30`}></div>
                          <h3 className="text-xl font-bold text-slate-800 relative">{item.title}</h3>
                        </div>
                      </div>

                      <p className="text-slate-600 mb-6">{item.desc}</p>

                      <div className="flex items-center justify-between">


                        {/* Circular progress indicator that fills on hover */}
                        <div className={`w-8 h-8 rounded-full border-2 ${itemColors[item.color].border} flex items-center justify-center relative`}>
                          <div className={`absolute inset-0.5 rounded-full ${itemColors[item.color].bg} scale-0 group-hover:scale-100 transition-transform duration-500 origin-center`}></div>
                          <span className="text-xs font-bold relative z-10 group-hover:text-white transition-colors">{item.number}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`mt-16 text-center ${customAnimations.bounceSubtle}`}>
            <a href="#start" className="inline-flex items-center bg-gradient-to-r from-blue-600 to-violet-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1">
              เริ่มต้นใช้งาน
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Target Schools Showcase */}
      <section id="schools" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-black font-bold text-center mb-12">โรงเรียนเป้าหมาย</h2>

          <Tabs defaultValue="m1" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="border border-blue-100">
                <TabsTrigger value="m1" className="px-8 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  ม.1
                </TabsTrigger>
                <TabsTrigger value="m4" className="px-8 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  ม.4
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="m1">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  "โรงเรียนสวนกุหลาบวิทยาลัย",
                  "โรงเรียนสามเสนวิทยาลัย",
                  "โรงเรียนเทพศิรินทร์",
                  "โรงเรียนโยธินบูรณะ",
                  "โรงเรียนบดินทรเดชา",
                  "โรงเรียนโพธิสารพิทยากร",
                  "โรงเรียนนวมินทราชินูทิศสตรีวิทยา",
                  "โรงเรียนสตรีวิทยา",
                  "โรงเรียนเตรียมอุดมศึกษาพัฒนาการ",
                ].map((school, index) => (
                  <Card key={index} className="overflow-hidden border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                    <CardContent className="p-4 flex flex-col items-center">
                      <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-3 overflow-hidden border border-blue-100">
                        <img
                          src={`/university_images/${school.toLowerCase().replace(/ /g, "-")}.jpg`}
                          alt={school}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/university_images/default.png";
                          }}
                        />
                      </div>
                      <h3 className="text-center text-sm font-medium">{school}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="m4">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  "โรงเรียนเตรียมอุดมศึกษา",
                  "โรงเรียนมหิดลวิทยานุสรณ์",
                  "โรงเรียนกำเนิดวิทย์",
                  "โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย",
                  "โรงเรียนสาธิตมหาวิทยาลัยศรีนครินทรวิโรฒประสานมิตร",
                ].map((school, index) => (
                  <Card key={index} className="overflow-hidden border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                    <CardContent className="p-4 flex flex-col items-center">
                      <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-3 overflow-hidden border border-blue-100">
                        <img
                          src={`/university_images/${school.toLowerCase().replace(/ /g, "-")}.jpg`}
                          alt={school}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/university_images/default.png";
                          }}
                        />
                      </div>
                      <h3 className="text-center text-sm font-medium">{school}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Features & Benefits */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 py-2 relative ">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gray-50">
              คุณสมบัติและประโยชน์ </span></h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {[
              {
                icon: <BarChart className="h-6 w-6 text-blue-600" />,
                title: "AI วิเคราะห์จุดแข็งจุดอ่อน",
                desc: "ระบบ AI วิเคราะห์ผลการทำแบบทดสอบและระบุจุดที่ต้องพัฒนาอย่างแม่นยำ"
              },
              {
                icon: <Users className="h-6 w-6 text-blue-600" />,
                title: "การเรียนรู้เฉพาะบุคคล",
                desc: "แบบฝึกหัดและเนื้อหาที่ปรับให้เหมาะกับความต้องการเฉพาะของนักเรียนแต่ละคน"
              },
              {
                icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
                title: "ติดตามความก้าวหน้า",
                desc: "ดูพัฒนาการและความก้าวหน้าในการเรียนรู้ด้วยกราฟและข้อมูลเชิงลึก"
              },
              {
                icon: <DollarSign className="h-6 w-6 text-blue-600" />,
                title: "คุ้มค่าคุ้มราคา",
                desc: "ประหยัดค่าใช้จ่ายมากกว่าการเรียนพิเศษแบบเดิม ได้ผลลัพธ์ที่ดีกว่า"
              },
            ].map((item, index) => (
              <div key={index} className="bg-white border border-blue-100 p-6 rounded-xl shadow-sm transform transition-all duration-300 hover:-translate-y-2 hover:shadow-md hover:border-blue-300">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4 border border-blue-100">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-black">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof - Updated with modern testimonial cards */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-black font-bold text-center mb-12">เสียงจากผู้ใช้งานจริง</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                img: "/per1.jpg",
                name: "น้องมิน",
                title: "สอบติดโรงเรียนเตรียมอุดมศึกษา",
                quote: "Unicoach AI ช่วยให้หนูเข้าใจจุดอ่อนของตัวเองและฝึกฝนได้ตรงจุด ทำให้สอบติดโรงเรียนในฝันได้สำเร็จ"
              },
              {
                img: "/per2.jpg",
                name: "น้องเบนซ์",
                title: "สอบติดโรงเรียนสวนกุหลาบวิทยาลัย",
                quote: "ผมชอบที่ Unicoach AI มีแนวข้อสอบเฉพาะของโรงเรียนที่ผมอยากเข้า ทำให้เตรียมตัวได้ตรงจุดมากๆ"
              },
              {
                img: "/per3.jpg",
                name: "คุณแม่น้องแพร",
                title: "ผู้ปกครอง",
                quote: "ประหยัดค่าใช้จ่ายได้มากเมื่อเทียบกับการเรียนพิเศษแบบเดิม ลูกสาวได้ฝึกฝนตามความต้องการและสอบติดโรงเรียนที่หวัง"
              },
            ].map((item, index) => (
              <div key={index} className="bg-white border border-blue-100 p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-2 hover:shadow-md hover:border-blue-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full overflow-hidden mr-4 border border-blue-100">
                    <Image src={item.img} alt="นักเรียน" width={48} height={48} />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-black">{item.title}</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -top-2 -left-2 text-4xl text-blue-200">"</div>
                  <p className="text-black italic pl-6 pr-2 relative z-10">
                    {item.quote}
                  </p>
                  <div className="absolute -bottom-4 -right-1 text-4xl text-blue-200">"</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Support */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">พันธมิตรและการสนับสนุน</h2>

          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              { img: "/uniclass.png", name: "Uniclass" },
              { img: "/tedfund.png", name: "TED Fund" },

            ].map((partner, index) => (
              <div key={index} className="text-center bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-300">
                <Image
                  src={partner.img}
                  alt={partner.name}
                  width={160}
                  height={60}
                  className="mx-auto mb-2"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/placeholder.png"; // Fallback image
                  }}
                />

                <p className="text-sm text-gray-600 font-bold">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">คำถามที่พบบ่อย</h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "Unicoach AI เหมาะกับนักเรียนระดับไหนบ้าง?",
                a: "Unicoach AI เหมาะสำหรับนักเรียนที่ต้องการเตรียมสอบเข้าโรงเรียนระดับชั้น ม.1 และ ม.4 โดยมีเนื้อหาและแบบฝึกหัดที่ปรับให้เหมาะกับแต่ละระดับชั้น"
              },
              {
                q: "AI วิเคราะห์จุดแข็งจุดอ่อนได้แม่นยำแค่ไหน?",
                a: "AI ของเราพัฒนาจากข้อมูลการทำข้อสอบของนักเรียนหลายหมื่นคน และมีความแม่นยำในการวิเคราะห์จุดแข็งจุดอ่อนสูงถึง 95% โดยสามารถระบุหัวข้อและทักษะย่อยที่นักเรียนต้องพัฒนาได้อย่างเฉพาะเจาะจง"
              },
              {
                q: "มีการรับประกันผลการสอบหรือไม่?",
                a: "สำหรับแพ็คเกจพรีเมียม เรามีการรับประกันผลการสอบ หากนักเรียนทำตามแผนการเรียนที่กำหนดอย่างเคร่งครัดและไม่สามารถสอบผ่านได้ เราจะคืนเงินให้ 100% ตามเงื่อนไขที่กำหนด"
              },
              {
                q: "สามารถใช้งานบนอุปกรณ์ใดได้บ้าง?",
                a: "Unicoach AI สามารถใช้งานได้บนทุกอุปกรณ์ผ่านแอพ LINE ไม่ว่าจะเป็นสมาร์ทโฟน แท็บเล็ต หรือคอมพิวเตอร์ ทำให้นักเรียนสามารถเรียนรู้ได้ทุกที่ทุกเวลา"
              },
            ].map((item, index) => (
              <div key={index} className="bg-white border border-blue-100 rounded-lg p-6 hover:shadow-md transition-all duration-300 hover:border-blue-300">
                <h3 className="text-lg font-semibold mb-3">{item.q}</h3>
                <p className="text-gray-700">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Final CTA Section */}
      <section id="cta" className="py-20 bg-gradient-to-b from-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute w-64 h-64 rounded-full bg-blue-100 opacity-40 -top-20 -left-20 blur-3xl animate-pulse"></div>
        <div className="absolute w-80 h-80 rounded-full bg-indigo-100 opacity-40 -bottom-40 -right-20 blur-3xl animate-pulse"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-white p-10 rounded-2xl shadow-lg max-w-3xl mx-auto transform hover:scale-[1.01] transition-all duration-300">
            {/* Decorative top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 rounded-t-2xl"></div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
              พร้อมเริ่มต้นการเตรียมสอบแบบใหม่กับ Unicoach AI?
            </h2>

            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-600 text-center">
              เริ่มต้นใช้งานง่ายๆ เพียงแค่เพิ่มเพื่อนใน LINE และเริ่มการเดินทางสู่ความสำเร็จในการสอบเข้าโรงเรียนในฝัน
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
              <a
                href="https://line.me/R/ti/p/@unicoach"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gradient-to-r from-emerald-600 to-emerald-800 text-white font-medium rounded-lg px-4 py-2 hover:from-green-600 hover:to-green-500 transition-all duration-300 shadow-md"
              >
                <img src="/line.png" alt="LINE" width={30} height={30} className="mr-3 transition-transform" />
                <span>เพิ่มเพื่อน</span>
              </a>
              <a
                href="https://m.me/unicoach"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium rounded-lg px-4 py-2 hover:from-blue-600 hover:to-blue-500 transition-all duration-300 shadow-md"
              >
                <img src="/messenger.svg" alt="Messenger" width={30} height={30} className="mr-3 transition-transform" />
                <span>ข้อความ</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="mb-4">
                <Image
                  src="/unicoach.logo.png"
                  alt="Unicoach AI Logo"
                  width={100}
                  height={30}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <p className="text-gray-400 mb-4">
                แพลตฟอร์ม AI ที่ช่วยให้นักเรียนเตรียมสอบเข้าโรงเรียนได้อย่างมีประสิทธิภาพ
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Image src="/facebook.png" alt="Facebook" width={20} height={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Image src="/tiktok2.png" alt="TikTok" width={20} height={20} />
                </a>
              </div>
            </div>

            {/* Simplified footer - just one column with contact info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">ติดต่อเรา</h3>
              <ul className="space-y-2">
                <li className="flex items-center"><Mail className="h-4 w-4 mr-2 text-blue-400" /> admin@uniclass.io</li>
                <li className="flex items-center"><Phone className="h-4 w-4 mr-2 text-blue-400" /> 09-178-24562</li>
                <li className="flex items-center"><Facebook className="h-4 w-4 mr-2 text-blue-400" /> facebook.com/unicoach.ai</li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">นโยบายความเป็นส่วนตัว</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">เงื่อนไขการใช้งาน</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-800 text-center">
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} Unicoach AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}