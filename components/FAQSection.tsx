export default function FAQSection() {
    return (
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
    );
  }