
import React from "react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Madrasah Aliyah Negeri telah membekali putra kami dengan ilmu dan akhlak yang sangat baik. Kami sangat puas dengan perkembangan akademik dan karakternya.",
      name: "Ahmad Saputra",
      role: "Orang Tua Siswa",
      image: "https://placehold.co/100/2a753e/ffffff?text=AS",
    },
    {
      quote: "Belajar di Madrasah ini menyenangkan. Guru-gurunya ramah dan suportif, kegiatan ekstrakurikulernya beragam, dan fasilitas pendukung belajarnya lengkap.",
      name: "Siti Rahma",
      role: "Siswa Kelas XII",
      image: "https://placehold.co/100/245e33/ffffff?text=SR",
    },
    {
      quote: "Sebagai alumni, saya sangat bersyukur pernah belajar di Madrasah ini. Ilmu dan nilai-nilai yang diajarkan sangat bermanfaat di dunia kerja dan masyarakat.",
      name: "Budi Cahyono",
      role: "Alumni Angkatan 2010",
      image: "https://placehold.co/100/1f4a2b/ffffff?text=BC",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-school-800 mb-4">
            Testimoni
          </h2>
          <p className="text-gray-600">
            Apa kata mereka tentang pengalaman belajar dan mengajar di Madrasah Aliyah Negeri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md relative"
            >
              <div className="mb-4">
                <svg className="h-8 w-8 text-school-400/40" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-6 italic">&apos;{testimonial.quote}&apos;</p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-school-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
