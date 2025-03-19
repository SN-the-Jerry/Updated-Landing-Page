"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { School, BookOpen, BarChart, Target, Users, TrendingUp, DollarSign, Facebook, Mail, Phone } from "lucide-react"
import { motion } from "framer-motion"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#0575E6] to-[#021B79] shadow-sm backdrop-blur-md bg-opacity-90">
        <div className="container mx-auto px-8 py-0.1 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/logo.svg?height=60&width=180"
              alt="Unicoach AI Logo"
              width={150}
              height={40}
              className="mr-2 transition-transform duration-300 hover:scale-105"
            />
          </div>
          <button className="md:hidden text-white p-2 rounded-lg hover:bg-white/10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16" />
            </svg>
          </button>

          <div className=" hidden md:flex space-x-6 ">
            <a href="#home" className="text-white hover:text-primary">
              บ้าน
            </a>
            <a href="#about" className="text-white hover:text-primary">
              กี่ยวกับ
            </a>
            <a href="#courses" className="text-white hover:text-primary">
              หลักสูตร
            </a>
            <a href="#contact" className="text-white hover:text-primary">
              ติดต่อ
            </a>
          </div>
        </div>
      </nav >


      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}

        < section className="bg-white py-16 md:py-24" >

          <div className="container mx-auto px-8 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">เตรียมสอบเข้าโรงเรียนด้วย AI ที่เข้าใจคุณ</h1>
              <p className="text-xl text-gray-700 mb-8">
                Unicoach AI ช่วยให้นักเรียนเตรียมสอบเข้าโรงเรียนได้อย่างมีประสิทธิภาพ ด้วยการวิเคราะห์จุดแข็งจุดอ่อนและสร้างแบบฝึกหัดเฉพาะบุคคล
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://lin.ee/ZS4OG1u" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://scdn.line-apps.com/n/line_add_friends/btn/th.png"
                    alt="เพิ่มเพื่อน"
                    height="35"
                    className="h-9"
                  />
                </a>
                <a href="https://www.facebook.com/UniclassEducation" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="bg-secondary text-white hover:bg-secondary hover:text-white"
                  >
                    <Facebook className="mr-2 h-4 w-4" />
                    Facebook
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/ai_hero.jpg"
                alt="นักเรียนกำลังใช้ Unicoach AI"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section >
      </motion.div>

      {/* Problem-Solution Section */}
      < section className="py-16 bg-[#021B79]" >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-white font-bold text-center mb-12">ปัญหาการเตรียมสอบแบบเดิม vs Unicoach AI</h2>

          <div className="grid md:grid-cols-2 gap-8 perspective-1000">
            <div className="bg-gradient-to-l from-[#2193b0] to-[#6dd5ed] p-8 rounded-2xl shadow-xl transform transition-all duration-300 hover:-translate-y-2 border border-[#261FB3]">
              <h3 className="text-xl font-semibold mb-4 text-black">ปัญหาการเตรียมสอบแบบเดิม</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✖</span>
                  <span>เรียนเนื้อหาเดิมซ้ำๆ ไม่ตรงจุดอ่อน</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✖</span>
                  <span>ค่าใช้จ่ายสูงในการเรียนพิเศษ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✖</span>
                  <span>ไม่มีข้อมูลวิเคราะห์ความก้าวหน้า</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✖</span>
                  <span>ไม่มีแนวข้อสอบเฉพาะโรงเรียน</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✖</span>
                  <span>เวลาจำกัดในการเรียนรู้</span>
                </li>
              </ul>

            </div>

            <div className="bg-gradient-to-l from-[#2193b0] to-[#6dd5ed] p-8 rounded-2xl shadow-xl transform transition-all duration-300 hover:-translate-y-2 border border-[#261FB3]">
              <h3 className="text-xl font-semibold mb-4 text-black">วิธีแก้ปัญหาด้วย Unicoach AI</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>AI วิเคราะห์จุดอ่อนและสร้างแบบฝึกหัดเฉพาะบุคคล</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>ราคาประหยัดกว่าการเรียนพิเศษแบบเดิม</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>ติดตามความก้าวหน้าด้วยข้อมูลเชิงลึก</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>แนวข้อสอบเฉพาะโรงเรียนที่ต้องการสอบเข้า</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>เรียนรู้ได้ทุกที่ทุกเวลาตามความต้องการ</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section >

      {/* How It Works Section */}
      < section id="how-it-works" className="py-16 bg-white" >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">วิธีการใช้งาน Unicoach AI</h2>

          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="bg-gradient-to-r from-[#2193b0] to-[#6dd5ed] p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-2 text-center border border-[#261FB3]">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <School className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. เลือกโรงเรียน</h3>
              <p className="text-black">เลือกโรงเรียนที่ต้องการสอบเข้าจากรายชื่อโรงเรียนชั้นนำทั่วประเทศ</p>
            </div>

            <div className="bg-gradient-to-r from-[#2193b0] to-[#6dd5ed] p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-2 text-center border border-[#261FB3]">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. ทำแบบทดสอบ</h3>
              <p className="text-black">ทำแบบทดสอบเพื่อประเมินความรู้พื้นฐานและจุดแข็งจุดอ่อน</p>
            </div>

            <div className="bg-gradient-to-r from-[#2193b0] to-[#6dd5ed] p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-2 text-center border border-[#261FB3]">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. AI วิเคราะห์</h3>
              <p className="text-black">AI วิเคราะห์ผลการทดสอบและระบุจุดที่ต้องพัฒนา</p>
            </div>

            <div className="bg-gradient-to-r from-[#2193b0] to-[#6dd5ed] p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-2 text-center border border-[#261FB3]">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">4. ฝึกฝนเฉพาะบุคคล</h3>
              <p className="text-black">รับแบบฝึกหัดที่ปรับให้เหมาะกับคุณและโรงเรียนที่ต้องการสอบเข้า</p>
            </div>
          </div>
        </div>
      </section >

      {/* Target Schools Showcase */}
      < section id="schools" className="py-16 bg-[#021B79] bg-primary/20" >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-white font-bold text-center mb-12 text-primary">โรงเรียนเป้าหมาย</h2>

          <Tabs defaultValue="m1" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="m1" className="px-8">
                  ม.1
                </TabsTrigger>
                <TabsTrigger value="m4" className="px-8">
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
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-4 flex flex-col items-center">
                      <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-3 overflow-hidden ">
                        <img
                          src={`/university_images/${school.toLowerCase().replace(/ /g, "-")}.jpg`} // Adjust the file extension if needed
                          alt={school}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null; // Prevent infinite loop
                            e.target.src = "/university_images/default.ppg"; // Fallback image
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
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-4 flex flex-col items-center">
                      <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-3 overflow-hidden">
                        <img
                          src={`/university_images/${school.toLowerCase().replace(/ /g, "-")}.jpg`} // Corrected path and replace
                          alt={school}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null; // Prevent infinite loop
                            e.target.src = "/university_images/default.png"; // Fallback image
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
      </section >

      {/* Features & Benefits */}

      < section id="features" className="py-16 bg-white" >

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="/10 px-4 py-2 rounded-full">
              คุณสมบัติและประโยชน์ </span></h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-l from-[#2193b0] to-[#6dd5ed] p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-2 border border-[#261FB3]">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI วิเคราะห์จุดแข็งจุดอ่อน</h3>
                  <p className="text-black">ระบบ AI วิเคราะห์ผลการทำแบบทดสอบและระบุจุดที่ต้องพัฒนาอย่างแม่นยำ</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-l from-[#2193b0] to-[#6dd5ed] p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-2 border border-[#261FB3]">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">การเรียนรู้เฉพาะบุคคล</h3>
                  <p className="text-black">แบบฝึกหัดและเนื้อหาที่ปรับให้เหมาะกับความต้องการเฉพาะของนักเรียนแต่ละคน</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-l from-[#2193b0] to-[#6dd5ed] p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-2 border border-[#261FB3]">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">ติดตามความก้าวหน้า</h3>
                  <p className="text-black">ดูพัฒนาการและความก้าวหน้าในการเรียนรู้ด้วยกราฟและข้อมูลเชิงลึก</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-l from-[#2193b0] to-[#6dd5ed] p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-2 border border-[#261FB3]">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">คุ้มค่าคุ้มราคา</h3>
                  <p className="text-black">ประหยัดค่าใช้จ่ายมากกว่าการเรียนพิเศษแบบเดิม ได้ผลลัพธ์ที่ดีกว่า</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Social Proof */}
      < section id="testimonials" className="py-16 bg-[#021B79]" >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-white font-bold text-center mb-12">เสียงจากผู้ใช้งานจริง</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-r from-[#6dd5ed] to-[#2193b0] p-6 rounded-lg transform transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                  <Image src="/per1.jpg?height=48&width=48" alt="นักเรียน" width={48} height={48} />
                </div>
                <div>
                  <h3 className="font-semibold">น้องมิน</h3>
                  <p className="text-sm text-black">สอบติดโรงเรียนเตรียมอุดมศึกษา</p>
                </div>
              </div>
              <p className="text-black italic">
                "Unicoach AI ช่วยให้หนูเข้าใจจุดอ่อนของตัวเองและฝึกฝนได้ตรงจุด ทำให้สอบติดโรงเรียนในฝันได้สำเร็จ"
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#6dd5ed] to-[#2193b0] p-6 rounded-lg transform transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                  <Image src="/per2.jpg?height=48&width=48" alt="นักเรียน" width={48} height={48} />
                </div>
                <div>
                  <h3 className="font-semibold">น้องเบนซ์</h3>
                  <p className="text-sm text-black">สอบติดโรงเรียนสวนกุหลาบวิทยาลัย</p>
                </div>
              </div>
              <p className="text-black italic">
                "ผมชอบที่ Unicoach AI มีแนวข้อสอบเฉพาะของโรงเรียนที่ผมอยากเข้า ทำให้เตรียมตัวได้ตรงจุดมากๆ"
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#6dd5ed] to-[#2193b0] p-6 rounded-lg transform transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                  <Image src="/per3.jpg?height=48&width=48" alt="ผู้ปกครอง" width={48} height={48} />
                </div>
                <div>
                  <h3 className="font-semibold">คุณแม่น้องแพร</h3>
                  <p className="text-sm text-black">ผู้ปกครอง</p>
                </div>
              </div>
              <p className="text-black italic">
                "ประหยัดค่าใช้จ่ายได้มากเมื่อเทียบกับการเรียนพิเศษแบบเดิม ลูกสาวได้ฝึกฝนตามความต้องการและสอบติดโรงเรียนที่หวัง"
              </p>
            </div>
          </div>
        </div>
      </section >

      {/* Partners & Support */}
      < section className="py-16 bg-white" >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">พันธมิตรและการสนับสนุน</h2>

          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="text-center">
              <Image
                src="/uniclass.png?height=60&width=160"
                alt="Uniclass"
                width={160}
                height={60}
                className="mx-auto mb-2 border border-[#261FB3]"
              />
              <p className="text-sm text-gray-600 font-bold">Uniclass</p>
            </div>

            <div className="text-center">
              <Image
                src="/tedfund.png?height=60&width=160"
                alt="TED Fund"
                width={160}
                height={60}
                className="mx-auto mb-2 border border-[#261FB3]"
              />
              <p className="text-sm text-gray-600 font-bold">TED Fund</p>
            </div>

            <div className="text-center">
              <Image
                src="/edu_fund.svg?height=60&width=160"
                alt="Partner 3"
                width={160}
                height={60}
                className="mx-auto mb-2 border border-[#261FB3]"
              />
              <p className="text-sm text-gray-600 font-bold">Partner 3</p>
            </div>
          </div>
        </div>
      </section >

      {/* Final CTA */}
      < section className="py-16 bg-[#021B79] text-white" >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">พร้อมเริ่มต้นการเตรียมสอบแบบใหม่กับ Unicoach AI?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            เริ่มต้นใช้งานง่ายๆ เพียงแค่เพิ่มเพื่อนใน LINE และเริ่มการเดินทางสู่ความสำเร็จในการสอบเข้าโรงเรียนในฝัน
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://lin.ee/ZS4OG1u" target="_blank" rel="noopener noreferrer">
              <img
                src="https://scdn.line-apps.com/n/line_add_friends/btn/th.png"
                alt="เพิ่มเพื่อน"
                height="36"
                className="h-9"
              />
            </a>
            <a href="https://www.facebook.com/unicoach" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="bg-secondary text-white hover:bg-secondary hover:text-white">
                <Facebook className="mr-2 h-4 w-4" />
                Facebook
              </Button>
            </a>
          </div>
        </div>
      </section >

      {/* Footer */}
      < footer className="bg-gray-900 text-white py-12" >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/unicoach.logo.png?height=40&width=150"
                alt="Unicoach AI Logo"
                width={150}
                height={40}
                className="mb-4"
              />
              <p className="text-gray-400 mb-4">แพลตฟอร์ม AI ช่วยเตรียมสอบเข้าโรงเรียนชั้นนำทั่วประเทศ</p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/unicoach"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue text-white hover:text-white"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-youtube"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">ติดต่อเรา</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <a href="mailto:info@unicoach.ai" className="text-gray-400 hover:text-white">
                    info@unicoach.ai
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <a href="tel:+6612345678" className="text-gray-400 hover:text-white">
                    012-345-6789
                  </a>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin mr-2"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-gray-400">กรุงเทพมหานคร, ประเทศไทย</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">ลิงก์ด่วน</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#how-it-works" className="text-gray-400 hover:text-white">
                    วิธีการใช้งาน
                  </a>
                </li>
                <li>
                  <a href="#schools" className="text-gray-400 hover:text-white">
                    โรงเรียนเป้าหมาย
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-gray-400 hover:text-white">
                    คุณสมบัติ
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-gray-400 hover:text-white">
                    รีวิวจากผู้ใช้
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    นโยบายความเป็นส่วนตัว
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">พันธมิตร</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Uniclass
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    TED Fund
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Partner 3
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Unicoach AI. สงวนลิขสิทธิ์ทั้งหมด.</p>
          </div>
        </div>
      </footer >
    </main >
  )
}

