"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { School, BookOpen, BarChart, Target, Users, TrendingUp, DollarSign, Facebook, Mail, Phone } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react";


export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      {/* Navbar - Updated with cleaner design */}
      <nav className="sticky top-0 z-50 bg-white bg-opacity-80 border-b border-blue-400 shadow-sm">
        <div className="container mx-auto px-6 h-16 flex justify-between items-center">

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="flex flex-col items-center justify-center w-10 h-10 rounded-lg hover:bg-blue-50 transition-all duration-300 focus:outline-none"
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

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 ml-12">
            <a href="#explore" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
              Explore
            </a>
            <a href="#courses" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
              Courses
            </a>
            <a href="#learning-process" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
              Special Package
            </a>
            <a href="#review" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
              Blogs
            </a>
            <a href="#review" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
              About Us
            </a>
          </div>

          {/*Logo */}
          <div className="flex items-center w-[120px] h-[30px] md:order-first">
            
              <Image
                src="/logo.svg"
                alt="Unicoach AI Logo"
                width={140}
                height={50}
                className="m-2 transition-transform duration-300 hover:scale-105"
              />
            
          </div>

          {/* Auth Links */}
          <div className="flex space-x-6">
            <a href="#" className="border border-blue-600 rounded-full flex items-center justify-center w-[80px] h-[30px] text-gray-700 hover:text-blue-600 font-medium transition-colors" rel="noopener noreferrer">
              Register
            </a>
            <a href="#" className="bg-gradient-to-r from-violet-600 to-blue-600 text-white rounded-full flex items-center justify-center w-[80px] h-[30px] hover:text-orange-400 font-medium transition-colors" target="_blank" rel="noopener noreferrer">
              Log In
            </a>
          </div>
        </div>


        {/* Mobile Menu - Updated with cleaner look */}
        {isMobileMenuOpen && (
          <div className="md:hidden animate-slideDown">
            <div className="bg-white border-t border-blue-100">
              <div className="container mx-auto px-4 py-2">
                <a
                  href="#explore"
                  className="block text-gray-700 py-4 px-4 border-b border-blue-50 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center"
                >
                  <span className="text-blue-400 mr-3">01</span>
                  Explore
                </a>
                <a
                  href="#courses"
                  className="block text-gray-700 py-4 px-4 border-b border-blue-50 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center"
                >
                  <span className="text-blue-400 mr-3">02</span>
                  Courses
                </a>
                <a
                  href="#learning-process"
                  className="block text-gray-700 py-4 px-4 border-b border-blue-50 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center"
                >
                  <span className="text-blue-400 mr-3">03</span>
                  Learning Process
                </a>
                <a
                  href="#review"
                  className="block text-gray-700 py-4 px-4 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center"
                >
                  <span className="text-blue-400 mr-3">04</span>
                  Review
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>


      {/* Hero Section - Updated with cleaner design */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                เตรียมสอบเข้าโรงเรียนด้วย AI ที่เข้าใจคุณ
              </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Unicoach AI ช่วยให้นักเรียนเตรียมสอบเข้าโรงเรียนได้อย่างมีประสิทธิภาพ ด้วยการวิเคราะห์จุดแข็งจุดอ่อนและสร้างแบบฝึกหัดเฉพาะบุคคล
              </p>

              <div className="flex flex-col sm:flex-row gap-5">
                {/* Button - Updated with cleaner design */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-[220px]"
                >
                  <div className="absolute inset-0 bg-blue-600 rounded-xl blur opacity-20 transform rotate-1"></div>
                  <button className="relative w-full py-2 px-4 bg-white border-2 border-blue-600 text-blue-600 font-medium rounded-xl flex items-center justify-center space-x-3 shadow-md hover:bg-blue-50 transition-all duration-300">
                    <BookOpen size={16} />
                    <span className="text-lg">Try Now for Free!</span>
                  </button>
                </motion.div>
              </div>
            </div>

            {/* Image display */}
            <div className="relative h-[300px] md:h-[400px] lg:h-[450px]">
              <div className="absolute inset-0 rounded-2xl bg-blue-100/30 border border-blue-200"></div>
              <Image
                src="/4.webp"
                alt="นักเรียนกำลังใช้ Unicoach AI"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>


      {/* Problem-Solution Section - Ultra Modern Design with Animation */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute w-64 h-64 rounded-full bg-fuchsia-200 opacity-30 -top-20 -left-20 blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 rounded-full bg-blue-200 opacity-30 -bottom-40 -right-20 blur-3xl animate-pulse"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-violet-100 text-violet-700 font-medium text-sm mb-4 animate-fadeIn">เปรียบเทียบอย่างเห็นภาพ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 animate-slideUp">เปรียบเทียบการเตรียมสอบ</h2>
            <p className="mt-4 text-slate-600 animate-fadeIn">ค้นพบความแตกต่างระหว่างวิธีเตรียมสอบแบบเดิมกับเทคโนโลยี AI ที่จะยกระดับการเรียนรู้ของคุณ</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Traditional Method Card */}
            <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 p-1 shadow-lg group hover:shadow-xl transition-all duration-500 animate-slideInLeft">
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
            <div className="rounded-2xl bg-gradient-to-br from-violet-500 to-blue-500 p-1 shadow-lg group hover:shadow-xl transition-all duration-500 animate-slideInRight">
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
      <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
        {/* Animated decorative elements */}
        <div className="absolute w-full h-1/3 bg-gradient-to-b from-cyan-50 to-transparent top-0 left-0"></div>
        <div className="absolute w-40 h-40 bg-cyan-200 rounded-full opacity-20 top-20 left-10 blur-2xl animate-float"></div>
        <div className="absolute w-60 h-60 bg-blue-200 rounded-full opacity-20 bottom-20 right-10 blur-2xl animate-float-delayed"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-cyan-100 text-cyan-700 font-medium text-sm mb-4 animate-fadeIn">เข้าใจง่ายใน 4 ขั้นตอน</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 animate-slideUp">วิธีการใช้งาน Unicoach AI</h2>
            <p className="mt-4 text-slate-600 animate-fadeIn">เริ่มต้นใช้งานง่ายๆ เพียงไม่กี่ขั้นตอน</p>
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
                  animation: "animate-fadeInUp"
                },
                {
                  
                  title: "ทำแบบทดสอบ",
                  desc: "ทำแบบทดสอบประเมินความรู้พื้นฐานเพื่อให้ AI ระบุจุดแข็งและจุดอ่อน",
                  icon: "📝",
                  color: "blue",
                  animation: "animate-fadeInUp animation-delay-200"
                },
                {
                 
                  title: "รับผลวิเคราะห์",
                  desc: "AI วิเคราะห์ผลการทดสอบและระบุจุดที่ต้องพัฒนาอย่างเฉพาะเจาะจง",
                  icon: "🔍",
                  color: "indigo",
                  animation: "animate-fadeInUp animation-delay-400"
                },
                {
                  
                  title: "ฝึกฝนเฉพาะตัว",
                  desc: "รับแบบฝึกหัดที่ปรับให้เหมาะกับคุณและโรงเรียนที่ต้องการสอบเข้า",
                  icon: "🎯",
                  color: "violet",
                  animation: "animate-fadeInUp animation-delay-600"
                }
              ].map((item, index) => (
                <div key={index} className={`${item.animation}`}>
                  <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:-translate-y-2">
                    {/* Gradient top border */}
                    <div className={`h-2 bg-gradient-to-r from-${item.color}-400 to-${item.color}-600 w-full`}></div>

                    <div className="p-8">
                      <div className="flex items-center mb-6">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br from-${item.color}-400 to-${item.color}-600 text-white mr-4 shadow-lg group-hover:scale-110 transition-transform`}>
                          {item.icon}
                        </div>
                        <div className="relative">
                          <div className={`absolute -top-6 -left-2 text-${item.color}-100 font-bold text-5xl opacity-30`}></div>
                          <h3 className="text-xl font-bold text-slate-800 relative">{item.title}</h3>
                        </div>
                      </div>

                      <p className="text-slate-600 mb-6">{item.desc}</p>

                      <div className="flex items-center justify-between">
                        <div className={`text-${item.color}-600 font-medium text-sm flex items-center`}>
                          <span className="mr-1">เริ่มเลย</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>

                        {/* Circular progress indicator that fills on hover */}
                        <div className={`w-8 h-8 rounded-full border-2 border-${item.color}-200 flex items-center justify-center relative`}>
                          <div className={`absolute inset-0.5 rounded-full bg-${item.color}-400 scale-0 group-hover:scale-100 transition-transform duration-500 origin-center`}></div>
                          <span className="text-xs font-bold relative z-10 group-hover:text-white transition-colors">{item.number}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center animate-bounce-subtle">
            <a href="#start" className="inline-flex items-center bg-gradient-to-r from-blue-600 to-violet-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1">
              เริ่มต้นใช้งาน
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      {/* Target Schools Showcase - Updated with cleaner cards */}
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
                            e.target.src = "/university_images/default.ppg";
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

      {/* Features & Benefits - Updated with modern cards */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-blue-50 border border-blue-100 px-4 py-2 rounded-full">
              คุณสมบัติและประโยชน์ </span></h2>

          <div className="grid md:grid-cols-2 gap-8">
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
                    <Image src={`${item.img}?height=48&width=48`} alt="นักเรียน" width={48} height={48} />
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

      {/* Partners & Support - Updated with cleaner design */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">พันธมิตรและการสนับสนุน</h2>

          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              { img: "/uniclass.png", name: "Uniclass" },
              { img: "/tedfund.png", name: "TED Fund" },
              { img: "/edu_fund.svg", name: "Partner 3" },
            ].map((partner, index) => (
              <div key={index} className="text-center bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-300">
                <Image
                  src={`${partner.img}?height=60&width=160`}
                  alt={partner.name}
                  width={160}
                  height={60}
                  className="mx-auto mb-2"
                />
                <p className="text-sm text-gray-600 font-bold">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Updated with cleaner design */}
      <section className="py-16 bg-blue-50 border-t border-b border-blue-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">พร้อมเริ่มต้นการเตรียมสอบแบบใหม่กับ Unicoach AI?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
            เริ่มต้นใช้งานง่ายๆ เพียงแค่เพิ่มเพื่อนใน LINE และเริ่มการเดินทางสู่ความสำเร็จในการสอบเข้าโรงเรียนในฝัน
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://line.me/R/ti/p/@unicoach"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white border-2 border-green-600 text-blue-600 font-medium rounded-xl px-4 py-2 hover:bg-blue-50 transition-all duration-300 shadow-md"
            >
              <Image src="/line.png" alt="LINE" width={24} height={24} className="mr-2" />
              <span className="text-lg">Add LINE</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-blue-600 text-white font-medium rounded-xl px-6 py-2 hover:bg-blue-700 transition-all duration-300 shadow-md"
            >
              <span className="text-lg">ติดต่อเรา</span>
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">แพ็คเกจราคา</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white border border-blue-100 rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:transform hover:-translate-y-2">
              <div className="p-6 border-b border-blue-100">
                <h3 className="text-xl font-bold mb-2">แพ็คเกจพื้นฐาน</h3>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">฿990</span>
                  <span className="text-gray-600 ml-2">/ 3 เดือน</span>
                </div>
                <p className="mt-4 text-gray-700">เหมาะสำหรับนักเรียนที่เพิ่งเริ่มต้นเตรียมสอบ</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>แบบทดสอบวัดความรู้พื้นฐาน</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>AI วิเคราะห์จุดแข็งจุดอ่อน</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>แบบฝึกหัดเฉพาะบุคคล 100 ข้อ/เดือน</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>สรุปเนื้อหาสำคัญ</span>
                  </li>
                </ul>
                <button className="w-full mt-6 py-3 px-4 bg-white border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-all duration-300">
                  สมัครเลย
                </button>
              </div>
            </div>

            {/* Pro Plan - Highlighted */}
            <div className="bg-white border-2 border-blue-600 rounded-xl shadow-md overflow-hidden relative transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-2">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl">
                แนะนำ
              </div>
              <div className="p-6 border-b border-blue-100 bg-blue-50">
                <h3 className="text-xl font-bold mb-2">แพ็คเกจโปร</h3>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">฿1,990</span>
                  <span className="text-gray-600 ml-2">/ 6 เดือน</span>
                </div>
                <p className="mt-4 text-gray-700">เหมาะสำหรับนักเรียนที่ต้องการเตรียมตัวอย่างเต็มที่</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>ทุกอย่างในแพ็คเกจพื้นฐาน</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>แบบฝึกหัดเฉพาะบุคคล 300 ข้อ/เดือน</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>แนวข้อสอบเฉพาะโรงเรียน</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>รายงานความก้าวหน้ารายสัปดาห์</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>ปรึกษาผู้เชี่ยวชาญ 1 ครั้ง/เดือน</span>
                  </li>
                </ul>
                <button className="w-full mt-6 py-3 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300">
                  สมัครเลย
                </button>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-white border border-blue-100 rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:transform hover:-translate-y-2">
              <div className="p-6 border-b border-blue-100">
                <h3 className="text-xl font-bold mb-2">แพ็คเกจพรีเมียม</h3>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">฿2,990</span>
                  <span className="text-gray-600 ml-2">/ 12 เดือน</span>
                </div>
                <p className="mt-4 text-gray-700">สำหรับนักเรียนที่ต้องการเตรียมตัวอย่างเข้มข้นที่สุด</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>ทุกอย่างในแพ็คเกจโปร</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>แบบฝึกหัดเฉพาะบุคคลไม่จำกัด</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>ติวแบบตัวต่อตัวกับผู้เชี่ยวชาญ 5 ครั้ง</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>การรับประกันผลการสอบ*</span>
                  </li>
                </ul>
                <button className="w-full mt-6 py-3 px-4 bg-white border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-all duration-300">
                  สมัครเลย
                </button>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-600 text-center mt-8">* เงื่อนไขการรับประกันผลการสอบเป็นไปตามที่บริษัทกำหนด</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-50">
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

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">ติดต่อเรา</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-4">ข้อมูลติดต่อ</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mr-3 border border-blue-100">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">อีเมล</p>
                    <p className="text-gray-700">support@unicoach.ai</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mr-3 border border-blue-100">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">โทรศัพท์</p>
                    <p className="text-gray-700">02-123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mr-3 border border-blue-100">
                    <Facebook className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">เฟซบุ๊ก</p>
                    <p className="text-gray-700">facebook.com/unicoach.ai</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">ติดตามเรา</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center border border-blue-100 hover:bg-blue-100 transition-colors">
                    <Image src="/facebook.png" alt="Instagram" width={37} height={37} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center border border-blue-100 hover:bg-blue-100 transition-colors">
                    <Image src="/tiktok.png" alt="Instagram" width={37} height={37} />
                  </a>

                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">ส่งข้อความถึงเรา</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="name">ชื่อ</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="กรอกชื่อของคุณ"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="email">อีเมล</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="message">ข้อความ</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="พิมพ์ข้อความของคุณที่นี่..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300"
                >
                  ส่งข้อความ
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="bg-white rounded-full flex items-center justify-center w-[90px] h-[40px] shadow-sm mb-4">
                <Image
                  src="/logo.svg"
                  alt="Unicoach AI Logo"
                  width={140}
                  height={50}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <p className="text-gray-400 mb-4">
                แพลตฟอร์ม AI ที่ช่วยให้นักเรียนเตรียมสอบเข้าโรงเรียนได้อย่างมีประสิทธิภาพ
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Image src="/facebook.png" alt="Instagram" width={20}height={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Image src="/tiktok2.png" alt="Instagram" width={20} height={20} />
                </a>

              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">บริการของเรา</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">เตรียมสอบ ม.1</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">เตรียมสอบ ม.4</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">คอร์สพิเศษ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">บริการสำหรับโรงเรียน</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">เกี่ยวกับเรา</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">เกี่ยวกับ Unicoach</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">ทีมงานของเรา</a></li>

              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">ช่วยเหลือ</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">คำถามที่พบบ่อย</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">ติดต่อเรา</a></li>
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
  );
}



























// "use client"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Card, CardContent } from "@/components/ui/card"
// import { School, BookOpen, BarChart, Target, Users, TrendingUp, DollarSign, Facebook, Mail, Phone } from "lucide-react"
// import { motion } from "framer-motion"
// import { useState } from "react";


// export default function Home() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <main className="flex min-h-screen flex-col">
//       {/* Navbar */}
//       <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#1560bd] to-[#1034a6] shadow-sm">
//         <div className="container mx-auto px-6 h-16 flex justify-between items-center">

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMobileMenu}
//               className="flex flex-col items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 focus:outline-none"
//               aria-label="Toggle menu"
//             >
//               <span
//                 className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 mb-1 ${isMobileMenuOpen ? "transform rotate-45 translate-y-1.5" : ""}`}
//               ></span>
//               <span
//                 className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}
//               ></span>
//               <span
//                 className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 mt-1 ${isMobileMenuOpen ? "transform -rotate-45 -translate-y-1.5" : ""}`}
//               ></span>
//             </button>
//           </div>

//           {/* Desktop Navigation Links */}
//           <div className="hidden md:flex space-x-8 ml-12">
//             <a href="#explore" className="text-white font-medium hover:text-blue-200 transition-colors">
//               Explore
//             </a>
//             <a href="#courses" className="text-white font-medium hover:text-blue-200 transition-colors">
//               Courses
//             </a>
//             <a href="#learning-process" className="text-white font-medium hover:text-blue-200 transition-colors">
//               Special Package
//             </a>
//             <a href="#review" className="text-white font-medium hover:text-blue-200 transition-colors">
//               Blogs
//             </a>
//             <a href="#review" className="text-white font-medium hover:text-blue-200 transition-colors">
//               About Us
//             </a>
//           </div>

//           {/*Logo */}
//           <div className="flex items-center md:order-first">
//             <div className="bg-white rounded-full flex items-center justify-center w-[90px] h-[40px] shadow-sm">
//               <Image
//                 src="/logo.svg"
//                 alt="Unicoach AI Logo"
//                 width={140}
//                 height={50}
//                 className="m-2 transition-transform duration-300 hover:scale-105"
//               />
//             </div>
//           </div>

//           {/* Auth Links */}
//           <div className="flex space-x-6">
//             <a href="#" className="text-white hover:text-blue-200 font-medium transition-colors" rel="noopener noreferrer">
//               Register
//             </a>
//             <a href="#" className="text-white hover:text-blue-200 font-medium transition-colors" target="_blank" rel="noopener noreferrer">
//               Log In
//             </a>
//           </div>
//         </div>


//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden animate-slideDown">
//             <div className="bg-white/10 backdrop-blur-md border-t border-white/10">
//               <div className="container mx-auto px-4 py-2">
//                 <a
//                   href="#explore"
//                   className="block text-white py-4 px-4 border-b border-white/10 hover:bg-white/5 hover:text-primary transition-colors flex items-center"
//                 >
//                   <span className="text-white/80 mr-3">01</span>
//                   Explore
//                 </a>
//                 <a
//                   href="#courses"
//                   className="block text-white py-4 px-4 border-b border-white/10 hover:bg-white/5 hover:text-primary transition-colors flex items-center"
//                 >
//                   <span className="text-white/80 mr-3">02</span>
//                   Courses
//                 </a>
//                 <a
//                   href="#learning-process"
//                   className="block text-white py-4 px-4 border-b border-white/10 hover:bg-white/5 hover:text-primary transition-colors flex items-center"
//                 >
//                   <span className="text-white/80 mr-3">03</span>
//                   Learning Process
//                 </a>
//                 <a
//                   href="#review"
//                   className="block text-white py-4 px-4 hover:bg-white/5 hover:text-primary transition-colors flex items-center"
//                 >
//                   <span className="text-white/80 mr-3">04</span>
//                   Review
//                 </a>
//               </div>
//             </div>
//           </div>
//         )}
//       </nav>


//       {/* Hero Section */}

//       <section className="bg-[#F8F9FF] py-16 md:py-20">
//         <div className="container mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="grid md:grid-cols-2 gap-8 items-center"
//           >
//             <div>
//               <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
//                 เตรียมสอบเข้าโรงเรียนด้วย AI ที่เข้าใจคุณ
//               </h1>
//               <p className="text-lg text-gray-700 mb-8 leading-relaxed">
//                 Unicoach AI ช่วยให้นักเรียนเตรียมสอบเข้าโรงเรียนได้อย่างมีประสิทธิภาพ ด้วยการวิเคราะห์จุดแข็งจุดอ่อนและสร้างแบบฝึกหัดเฉพาะบุคคล
//               </p>

//               <div className="flex flex-col sm:flex-row gap-5">
//                 {/* Teacher Button - Enhanced design */}
//                 <motion.div
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="relative w-[220px]"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-[#1560bd] to-[#1034a6] rounded-xl blur-sm opacity-70 transform -rotate-1"></div>
//                   <button className="relative w-full py-4 px-6 bg-gradient-to-r from-[#1560bd] to-[#1034a6] text-white font-medium rounded-xl flex items-center justify-center space-x-3 shadow-lg border border-white/20">
//                     <BookOpen size={10} />
//                     <span className="text-lg">Try Now for Free!</span>
//                   </button>
//                 </motion.div>

//               </div>
//             </div>

//             {/* image display */}
//             <div className="relative h-[300px] md:h-[400px] lg:h-[450px]">
//               <Image
//                 src="/4.webp"
//                 alt="นักเรียนกำลังใช้ Unicoach AI"
//                 fill
//                 className="object-contain"
//                 priority
//               />
//             </div>
//           </motion.div>
//         </div>
//       </section>


//       {/* Problem-Solution Section */}
//       < section className="py-16 bg-[#F0F4FF]" >
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl text-black font-bold text-center mb-12">ปัญหาการเตรียมสอบแบบเดิม vs Unicoach AI</h2>

//           <div className="grid md:grid-cols-2 gap-8 perspective-1000">
//             <div className="bg-gradient-to-r from-[#5efce8] to-[#736efe] p-8 rounded-2xl shadow-xl transform transition-all duration-300 hover:-translate-y-2">
//               <h3 className="text-xl font-semibold mb-4 text-black">ปัญหาการเตรียมสอบแบบเดิม</h3>
//               <ul className="space-y-3">
//                 <li className="flex items-start">
//                   <span className="text-primary mr-2">✖</span>
//                   <span>เรียนเนื้อหาเดิมซ้ำๆ ไม่ตรงจุดอ่อน</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-primary mr-2">✖</span>
//                   <span>ค่าใช้จ่ายสูงในการเรียนพิเศษ</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-primary mr-2">✖</span>
//                   <span>ไม่มีข้อมูลวิเคราะห์ความก้าวหน้า</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-primary mr-2">✖</span>
//                   <span>ไม่มีแนวข้อสอบเฉพาะโรงเรียน</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-primary mr-2">✖</span>
//                   <span>เวลาจำกัดในการเรียนรู้</span>
//                 </li>
//               </ul>

//             </div>

//             <div className="bg-gradient-to-r from-[#5efce8] to-[#736efe] p-8 rounded-2xl shadow-xl transform transition-all duration-300 hover:-translate-y-2">
//               <h3 className="text-xl font-semibold mb-4 text-black">วิธีแก้ปัญหาด้วย Unicoach AI</h3>
//               <ul className="space-y-3">
//                 <li className="flex items-start">
//                   <span className="text-primary mr-2">✓</span>
//                   <span>AI วิเคราะห์จุดอ่อนและสร้างแบบฝึกหัดเฉพาะบุคคล</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-primary mr-2">✓</span>
//                   <span>ราคาประหยัดกว่าการเรียนพิเศษแบบเดิม</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-primary mr-2">✓</span>
//                   <span>ติดตามความก้าวหน้าด้วยข้อมูลเชิงลึก</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-primary mr-2">✓</span>
//                   <span>แนวข้อสอบเฉพาะโรงเรียนที่ต้องการสอบเข้า</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-primary mr-2">✓</span>
//                   <span>เรียนรู้ได้ทุกที่ทุกเวลาตามความต้องการ</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section >

//       {/* How It Works Section */}
//       < section id="how-it-works" className="py-16 bg-white" >
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12 text-black">วิธีการใช้งาน Unicoach AI</h2>

//           <div className="grid md:grid-cols-4 gap-6 relative">
//             <div className="bg-gradient-to-r from-[#5efce8] to-[#736efe] p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-2 text-center">
//               <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <School className="h-8 w-8 text-primary" />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">1. เลือกโรงเรียน</h3>
//               <p className="text-black">เลือกโรงเรียนที่ต้องการสอบเข้าจากรายชื่อโรงเรียนชั้นนำทั่วประเทศ</p>
//             </div>

//             <div className="bg-gradient-to-r from-[#5efce8] to-[#736efe] p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-2 text-center">
//               <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <BookOpen className="h-8 w-8 text-primary" />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">2. ทำแบบทดสอบ</h3>
//               <p className="text-black">ทำแบบทดสอบเพื่อประเมินความรู้พื้นฐานและจุดแข็งจุดอ่อน</p>
//             </div>

//             <div className="bg-gradient-to-r from-[#5efce8] to-[#736efe] p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-2 text-center">
//               <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <BarChart className="h-8 w-8 text-primary" />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">3. AI วิเคราะห์</h3>
//               <p className="text-black">AI วิเคราะห์ผลการทดสอบและระบุจุดที่ต้องพัฒนา</p>
//             </div>

//             <div className="bg-gradient-to-r from-[#5efce8] to-[#736efe] p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-2 text-center">
//               <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Target className="h-8 w-8 text-primary" />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">4. ฝึกฝนเฉพาะบุคคล</h3>
//               <p className="text-black">รับแบบฝึกหัดที่ปรับให้เหมาะกับคุณและโรงเรียนที่ต้องการสอบเข้า</p>
//             </div>
//           </div>
//         </div>
//       </section >

//       {/* Target Schools Showcase */}
//       < section id="schools" className="py-16 bg-[#F0F4FF]" >
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl text-black font-bold text-center mb-12 ">โรงเรียนเป้าหมาย</h2>

//           <Tabs defaultValue="m1" className="w-full">
//             <div className="flex justify-center mb-8">
//               <TabsList>
//                 <TabsTrigger value="m1" className="px-8">
//                   ม.1
//                 </TabsTrigger>
//                 <TabsTrigger value="m4" className="px-8">
//                   ม.4
//                 </TabsTrigger>
//               </TabsList>
//             </div>

//             <TabsContent value="m1">
//               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                 {[
//                   "โรงเรียนสวนกุหลาบวิทยาลัย",
//                   "โรงเรียนสามเสนวิทยาลัย",
//                   "โรงเรียนเทพศิรินทร์",
//                   "โรงเรียนโยธินบูรณะ",
//                   "โรงเรียนบดินทรเดชา",
//                   "โรงเรียนโพธิสารพิทยากร",
//                   "โรงเรียนนวมินทราชินูทิศสตรีวิทยา",
//                   "โรงเรียนสตรีวิทยา",
//                   "โรงเรียนเตรียมอุดมศึกษาพัฒนาการ",
//                 ].map((school, index) => (
//                   <Card key={index} className="overflow-hidden">
//                     <CardContent className="p-4 flex flex-col items-center">
//                       <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-3 overflow-hidden ">
//                         <img
//                           src={`/university_images/${school.toLowerCase().replace(/ /g, "-")}.jpg`} // Adjust the file extension if needed
//                           alt={school}
//                           className="w-full h-full object-cover"
//                           onError={(e) => {
//                             e.target.onerror = null; // Prevent infinite loop
//                             e.target.src = "/university_images/default.ppg"; // Fallback image
//                           }}
//                         />

//                       </div>
//                       <h3 className="text-center text-sm font-medium">{school}</h3>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </TabsContent>

//             <TabsContent value="m4">
//               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                 {[
//                   "โรงเรียนเตรียมอุดมศึกษา",
//                   "โรงเรียนมหิดลวิทยานุสรณ์",
//                   "โรงเรียนกำเนิดวิทย์",
//                   "โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย",
//                   "โรงเรียนสาธิตมหาวิทยาลัยศรีนครินทรวิโรฒประสานมิตร",
//                 ].map((school, index) => (
//                   <Card key={index} className="overflow-hidden">
//                     <CardContent className="p-4 flex flex-col items-center">
//                       <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-3 overflow-hidden">
//                         <img
//                           src={`/university_images/${school.toLowerCase().replace(/ /g, "-")}.jpg`} // Corrected path and replace
//                           alt={school}
//                           className="w-full h-full object-cover"
//                           onError={(e) => {
//                             e.target.onerror = null; // Prevent infinite loop
//                             e.target.src = "/university_images/default.png"; // Fallback image
//                           }}
//                         />
//                       </div>
//                       <h3 className="text-center text-sm font-medium">{school}</h3>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </TabsContent>
//           </Tabs>
//         </div>
//       </section >

//       {/* Features & Benefits */}

//       < section id="features" className="py-16 bg-[#FFFFFF]" >

//         <div className="container mx-auto px-4 relative z-10">
//           <h2 className="text-3xl font-bold text-center mb-12">
//             <span className="/10 px-4 py-2 rounded-full">
//               คุณสมบัติและประโยชน์ </span></h2>

//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-gradient-to-r from-[#5efce8] to-[#736efe] p-6 rounded-xl shadow-sm transform transition-all duration-300 hover:-translate-y-2">
//               <div className="flex items-start mb-4">
//                 <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4">
//                   <BarChart className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2">AI วิเคราะห์จุดแข็งจุดอ่อน</h3>
//                   <p className="text-black">ระบบ AI วิเคราะห์ผลการทำแบบทดสอบและระบุจุดที่ต้องพัฒนาอย่างแม่นยำ</p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-gradient-to-r from-[#5efce8] to-[#736efe] p-6 rounded-xl shadow-sm transform transition-all duration-300 hover:-translate-y-2 ">
//               <div className="flex items-start mb-4">
//                 <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4">
//                   <Users className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2">การเรียนรู้เฉพาะบุคคล</h3>
//                   <p className="text-black">แบบฝึกหัดและเนื้อหาที่ปรับให้เหมาะกับความต้องการเฉพาะของนักเรียนแต่ละคน</p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-gradient-to-r from-[#5efce8] to-[#736efe] p-6 rounded-xl shadow-sm transform transition-all duration-300 hover:-translate-y-2 ">
//               <div className="flex items-start mb-4">
//                 <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4">
//                   <TrendingUp className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2">ติดตามความก้าวหน้า</h3>
//                   <p className="text-black">ดูพัฒนาการและความก้าวหน้าในการเรียนรู้ด้วยกราฟและข้อมูลเชิงลึก</p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-gradient-to-r from-[#5efce8] to-[#736efe] p-6 rounded-xl shadow-sm transform transition-all duration-300 hover:-translate-y-2 ">
//               <div className="flex items-start mb-4">
//                 <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4">
//                   <DollarSign className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2">คุ้มค่าคุ้มราคา</h3>
//                   <p className="text-black">ประหยัดค่าใช้จ่ายมากกว่าการเรียนพิเศษแบบเดิม ได้ผลลัพธ์ที่ดีกว่า</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section >

//       {/* Social Proof */}
//       < section id="testimonials" className="py-16 bg-[#F0F4FF]" >
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl text-black font-bold text-center mb-12">เสียงจากผู้ใช้งานจริง</h2>

//           <div className="grid md:grid-cols-3 gap-6">
//             <div className="bg-[#FAF9F6] p-6 rounded-lg transform transition-all duration-300 hover:-translate-y-2">
//               <div className="flex items-center mb-4">
//                 <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
//                   <Image src="/per1.jpg?height=48&width=48" alt="นักเรียน" width={48} height={48} />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">น้องมิน</h3>
//                   <p className="text-sm text-black">สอบติดโรงเรียนเตรียมอุดมศึกษา</p>
//                 </div>
//               </div>
//               <p className="text-black italic">
//                 "Unicoach AI ช่วยให้หนูเข้าใจจุดอ่อนของตัวเองและฝึกฝนได้ตรงจุด ทำให้สอบติดโรงเรียนในฝันได้สำเร็จ"
//               </p>
//             </div>

//             <div className="bg-[#FAF9F6] p-6 rounded-lg transform transition-all duration-300 hover:-translate-y-2">
//               <div className="flex items-center mb-4">
//                 <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
//                   <Image src="/per2.jpg?height=48&width=48" alt="นักเรียน" width={48} height={48} />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">น้องเบนซ์</h3>
//                   <p className="text-sm text-black">สอบติดโรงเรียนสวนกุหลาบวิทยาลัย</p>
//                 </div>
//               </div>
//               <p className="text-black italic">
//                 "ผมชอบที่ Unicoach AI มีแนวข้อสอบเฉพาะของโรงเรียนที่ผมอยากเข้า ทำให้เตรียมตัวได้ตรงจุดมากๆ"
//               </p>
//             </div>

//             <div className="bg-[#FAF9F6] p-6 rounded-lg transform transition-all duration-300 hover:-translate-y-2">
//               <div className="flex items-center mb-4">
//                 <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
//                   <Image src="/per3.jpg?height=48&width=48" alt="ผู้ปกครอง" width={48} height={48} />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">คุณแม่น้องแพร</h3>
//                   <p className="text-sm text-black">ผู้ปกครอง</p>
//                 </div>
//               </div>
//               <p className="text-black italic">
//                 "ประหยัดค่าใช้จ่ายได้มากเมื่อเทียบกับการเรียนพิเศษแบบเดิม ลูกสาวได้ฝึกฝนตามความต้องการและสอบติดโรงเรียนที่หวัง"
//               </p>
//             </div>
//           </div>
//         </div>
//       </section >

//       {/* Partners & Support */}
//       < section className="py-16 bg-white" >
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">พันธมิตรและการสนับสนุน</h2>

//           <div className="flex flex-wrap justify-center items-center gap-8">
//             <div className="text-center">
//               <Image
//                 src="/uniclass.png?height=60&width=160"
//                 alt="Uniclass"
//                 width={160}
//                 height={60}
//                 className="mx-auto mb-2"
//               />
//               <p className="text-sm text-gray-600 font-bold">Uniclass</p>
//             </div>

//             <div className="text-center">
//               <Image
//                 src="/tedfund.png?height=60&width=160"
//                 alt="TED Fund"
//                 width={160}
//                 height={60}
//                 className="mx-auto mb-2"
//               />
//               <p className="text-sm text-gray-600 font-bold">TED Fund</p>
//             </div>

//             <div className="text-center">
//               <Image
//                 src="/edu_fund.svg?height=60&width=160"
//                 alt="Partner 3"
//                 width={160}
//                 height={60}
//                 className="mx-auto mb-2"
//               />
//               <p className="text-sm text-gray-600 font-bold">Partner 3</p>
//             </div>
//           </div>
//         </div>
//       </section >

//       {/* Final CTA */}
//       < section className="py-16 bg-gradient-to-l from-[#003366] to-[#0f52ba] text-white" >
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-6">พร้อมเริ่มต้นการเตรียมสอบแบบใหม่กับ Unicoach AI?</h2>
//           <p className="text-xl mb-8 max-w-2xl mx-auto">
//             เริ่มต้นใช้งานง่ายๆ เพียงแค่เพิ่มเพื่อนใน LINE และเริ่มการเดินทางสู่ความสำเร็จในการสอบเข้าโรงเรียนในฝัน
//           </p>

//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <a href="https://lin.ee/ZS4OG1u" target="_blank" rel="noopener noreferrer">
//               <img
//                 src="https://scdn.line-apps.com/n/line_add_friends/btn/th.png"
//                 alt="เพิ่มเพื่อน"
//                 height="36"
//                 className="h-9"
//               />
//             </a>

//           </div>
//         </div>
//       </section >

//       {/* Footer */}
//       < footer className="bg-gray-900 text-white py-12" >
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-4 gap-8">
//             <div>
//               <Image
//                 src="/unicoach.logo.png?height=40&width=150"
//                 alt="Unicoach AI Logo"
//                 width={150}
//                 height={40}
//                 className="mb-4"
//               />
//               <p className="text-gray-400 mb-4">แพลตฟอร์ม AI ช่วยเตรียมสอบเข้าโรงเรียนชั้นนำทั่วประเทศ</p>
//               <div className="flex space-x-4">
//                 <a
//                   href="https://www.facebook.com/unicoach"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-blue text-white hover:text-white"
//                 >
//                   <Facebook className="h-5 w-5" />
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="lucide lucide-instagram"
//                   >
//                     <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
//                     <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//                     <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
//                   </svg>
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="lucide lucide-youtube"
//                   >
//                     <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
//                     <path d="m10 15 5-3-5-3z" />
//                   </svg>
//                 </a>
//               </div>
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold mb-4">ติดต่อเรา</h3>
//               <ul className="space-y-2">
//                 <li className="flex items-center">
//                   <Mail className="h-4 w-4 mr-2" />
//                   <a href="mailto:info@unicoach.ai" className="text-gray-400 hover:text-white">
//                     info@unicoach.ai
//                   </a>
//                 </li>
//                 <li className="flex items-center">
//                   <Phone className="h-4 w-4 mr-2" />
//                   <a href="tel:+6612345678" className="text-gray-400 hover:text-white">
//                     012-345-6789
//                   </a>
//                 </li>
//                 <li className="flex items-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="16"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="lucide lucide-map-pin mr-2"
//                   >
//                     <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
//                     <circle cx="12" cy="10" r="3" />
//                   </svg>
//                   <span className="text-gray-400">กรุงเทพมหานคร, ประเทศไทย</span>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold mb-4">ลิงก์ด่วน</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <a href="#how-it-works" className="text-gray-400 hover:text-white">
//                     วิธีการใช้งาน
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#schools" className="text-gray-400 hover:text-white">
//                     โรงเรียนเป้าหมาย
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#features" className="text-gray-400 hover:text-white">
//                     คุณสมบัติ
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#testimonials" className="text-gray-400 hover:text-white">
//                     รีวิวจากผู้ใช้
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-gray-400 hover:text-white">
//                     นโยบายความเป็นส่วนตัว
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold mb-4">พันธมิตร</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <a href="#" className="text-gray-400 hover:text-white">
//                     Uniclass
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-gray-400 hover:text-white">
//                     TED Fund
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-gray-400 hover:text-white">
//                     Partner 3
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 mt-8 pt-8 text-center">
//             <p className="text-gray-400">&copy; {new Date().getFullYear()} Unicoach AI. สงวนลิขสิทธิ์ทั้งหมด.</p>
//           </div>
//         </div>
//       </footer >
//     </main >
//   )
// }

