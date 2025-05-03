import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-black font-bold text-center mb-12">เสียงจากผู้ใช้งานจริง</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              img: "/per1.webp",
              name: "น้องมิน",
              title: "สอบติดโรงเรียนเตรียมอุดมศึกษา",
              quote: "Unicoach AI ช่วยให้หนูเข้าใจจุดอ่อนของตัวเองและฝึกฝนได้ตรงจุด ทำให้สอบติดโรงเรียนในฝันได้สำเร็จ"
            },
            {
              img: "/per2.webp",
              name: "น้องเบนซ์",
              title: "สอบติดโรงเรียนสวนกุหลาบวิทยาลัย",
              quote: "ผมชอบที่ Unicoach AI มีแนวข้อสอบเฉพาะของโรงเรียนที่ผมอยากเข้า ทำให้เตรียมตัวได้ตรงจุดมากๆ"
            },
            {
              img: "/per3.webp",
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
  );
}