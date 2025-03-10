import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { School, BookOpen, BarChart, Target, Users, TrendingUp, DollarSign, Facebook, Mail, Phone } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/placeholder.svg?height=40&width=150"
              alt="Unicoach AI Logo"
              width={150}
              height={40}
              className="mr-2"
            />
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#how-it-works" className="text-gray-700 hover:text-primary">
              วิธีการใช้งาน
            </a>
            <a href="#schools" className="text-gray-700 hover:text-primary">
              โรงเรียนเป้าหมาย
            </a>
            <a href="#features" className="text-gray-700 hover:text-primary">
              คุณสมบัติ
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary">
              รีวิวจากผู้ใช้
            </a>
          </div>
          <div>
            <a href="https://lin.ee/ZS4OG1u" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#06C755] hover:bg-[#06C755]/90">
                <Image src="/placeholder.svg?height=20&width=20" alt="LINE" width={20} height={20} className="mr-2" />
                เพิ่มเพื่อน LINE
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
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
                  height="36"
                  className="h-9"
                />
              </a>
              <a href="https://www.facebook.com/unicoach" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-white"
                >
                  <Facebook className="mr-2 h-4 w-4" />
                  Facebook
                </Button>
              </a>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="นักเรียนกำลังใช้ Unicoach AI"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Problem-Solution Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">ปัญหาการเตรียมสอบแบบเดิม vs Unicoach AI</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-red-600">ปัญหาการเตรียมสอบแบบเดิม</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✖</span>
                  <span>เรียนเนื้อหาเดิมซ้ำๆ ไม่ตรงจุดอ่อน</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✖</span>
                  <span>ค่าใช้จ่ายสูงในการเรียนพิเศษ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✖</span>
                  <span>ไม่มีข้อมูลวิเคราะห์ความก้าวหน้า</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✖</span>
                  <span>ไม่มีแนวข้อสอบเฉพาะโรงเรียน</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✖</span>
                  <span>เวลาจำกัดในการเรียนรู้</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-green-600">วิธีแก้ปัญหาด้วย Unicoach AI</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>AI วิเคราะห์จุดอ่อนและสร้างแบบฝึกหัดเฉพาะบุคคล</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>ราคาประหยัดกว่าการเรียนพิเศษแบบเดิม</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>ติดตามความก้าวหน้าด้วยข้อมูลเชิงลึก</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>แนวข้อสอบเฉพาะโรงเรียนที่ต้องการสอบเข้า</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>เรียนรู้ได้ทุกที่ทุกเวลาตามความต้องการ</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">วิธีการใช้งาน Unicoach AI</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <School className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. เลือกโรงเรียน</h3>
              <p className="text-gray-600">เลือกโรงเรียนที่ต้องการสอบเข้าจากรายชื่อโรงเรียนชั้นนำทั่วประเทศ</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. ทำแบบทดสอบ</h3>
              <p className="text-gray-600">ทำแบบทดสอบเพื่อประเมินความรู้พื้นฐานและจุดแข็งจุดอ่อน</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. AI วิเคราะห์</h3>
              <p className="text-gray-600">AI วิเคราะห์ผลการทดสอบและระบุจุดที่ต้องพัฒนา</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">4. ฝึกฝนเฉพาะบุคคล</h3>
              <p className="text-gray-600">รับแบบฝึกหัดที่ปรับให้เหมาะกับคุณและโรงเรียนที่ต้องการสอบเข้า</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Schools Showcase */}
      <section id="schools" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">โรงเรียนเป้าหมาย</h2>

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
                  "โรงเรียนนวมินทราชินูทิศ สตรีวิทยา",
                  "โรงเรียนสตรีวิทยา",
                  "โรงเรียนเตรียมอุดมศึกษาพัฒนาการ",
                ].map((school, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-4 flex flex-col items-center">
                      <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-3">
                        <School className="h-8 w-8 text-secondary" />
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
                  "โรงเรียนสาธิตมหาวิทยาลัยศรีนครินทรวิโรฒ ประสานมิตร",
                ].map((school, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-4 flex flex-col items-center">
                      <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-3">
                        <School className="h-8 w-8 text-secondary" />
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
      <section id="features" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">คุณสมบัติและประโยชน์</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI วิเคราะห์จุดแข็งจุดอ่อน</h3>
                  <p className="text-gray-600">ระบบ AI วิเคราะห์ผลการทำแบบทดสอบและระบุจุดที่ต้องพัฒนาอย่างแม่นยำ</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">การเรียนรู้เฉพาะบุคคล</h3>
                  <p className="text-gray-600">แบบฝึกหัดและเนื้อหาที่ปรับให้เหมาะกับความต้องการเฉพาะของนักเรียนแต่ละคน</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">ติดตามความก้าวหน้า</h3>
                  <p className="text-gray-600">ดูพัฒนาการและความก้าวหน้าในการเรียนรู้ด้วยกราฟและข้อมูลเชิงลึก</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">คุ้มค่าคุ้มราคา</h3>
                  <p className="text-gray-600">ประหยัดค่าใช้จ่ายมากกว่าการเรียนพิเศษแบบเดิม ได้ผลลัพธ์ที่ดีกว่า</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">เสียงจากผู้ใช้งานจริง</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                  <Image src="/placeholder.svg?height=48&width=48" alt="นักเรียน" width={48} height={48} />
                </div>
                <div>
                  <h3 className="font-semibold">น้องมิน</h3>
                  <p className="text-sm text-gray-500">สอบติดโรงเรียนเตรียมอุดมศึกษา</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Unicoach AI ช่วยให้หนูเข้าใจจุดอ่อนของตัวเองและฝึกฝนได้ตรงจุด ทำให้สอบติดโรงเรียนในฝันได้สำเร็จ"
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                  <Image src="/placeholder.svg?height=48&width=48" alt="นักเรียน" width={48} height={48} />
                </div>
                <div>
                  <h3 className="font-semibold">น้องเบนซ์</h3>
                  <p className="text-sm text-gray-500">สอบติดโรงเรียนสวนกุหลาบวิทยาลัย</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "ผมชอบที่ Unicoach AI มีแนวข้อสอบเฉพาะของโรงเรียนที่ผมอยากเข้า ทำให้เตรียมตัวได้ตรงจุดมากๆ"
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                  <Image src="/placeholder.svg?height=48&width=48" alt="ผู้ปกครอง" width={48} height={48} />
                </div>
                <div>
                  <h3 className="font-semibold">คุณแม่น้องแพร</h3>
                  <p className="text-sm text-gray-500">ผู้ปกครอง</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "ประหยัดค่าใช้จ่ายได้มากเมื่อเทียบกับการเรียนพิเศษแบบเดิม ลูกสาวได้ฝึกฝนตามความต้องการและสอบติดโรงเรียนที่หวัง"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Support */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">พันธมิตรและการสนับสนุน</h2>

          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=60&width=160"
                alt="Uniclass"
                width={160}
                height={60}
                className="mx-auto mb-2"
              />
              <p className="text-sm text-gray-600">Uniclass</p>
            </div>

            <div className="text-center">
              <Image
                src="/placeholder.svg?height=60&width=160"
                alt="TED Fund"
                width={160}
                height={60}
                className="mx-auto mb-2"
              />
              <p className="text-sm text-gray-600">TED Fund</p>
            </div>

            <div className="text-center">
              <Image
                src="/placeholder.svg?height=60&width=160"
                alt="Partner 3"
                width={160}
                height={60}
                className="mx-auto mb-2"
              />
              <p className="text-sm text-gray-600">Partner 3</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
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
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Facebook className="mr-2 h-4 w-4" />
                Facebook
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/placeholder.svg?height=40&width=150"
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
                  className="text-gray-400 hover:text-white"
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
      </footer>
    </main>
  )
}

