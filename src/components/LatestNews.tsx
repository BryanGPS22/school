
import React from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LatestNews: React.FC = () => {
  const news = [
    {
      id: 1,
      title: "Siswa Madrasah Raih Juara Olimpiade Sains Nasional",
      date: "01 May 2023",
      image: "https://placehold.co/800x500/2a753e/ffffff?text=Olimpiade+Sains",
      excerpt:
        "Prestasi membanggakan kembali ditorehkan oleh siswa Madrasah Aliyah Negeri dalam ajang Olimpiade Sains Nasional...",
      link: "/berita/1",
    },
    {
      id: 2,
      title: "Workshop Pengembangan Kurikulum Merdeka",
      date: "28 Apr 2023",
      image: "https://placehold.co/800x500/2a753e/ffffff?text=Workshop+Kurikulum",
      excerpt:
        "Madrasah mengadakan workshop pengembangan kurikulum merdeka yang diikuti oleh seluruh tenaga pendidik...",
      link: "/berita/2",
    },
    {
      id: 3,
      title: "Peringatan Hari Pendidikan Nasional",
      date: "25 Apr 2023",
      image: "https://placehold.co/800x500/2a753e/ffffff?text=Hari+Pendidikan",
      excerpt:
        "Madrasah Aliyah Negeri mengadakan upacara dan berbagai kegiatan dalam rangka memperingati Hari Pendidikan Nasional...",
      link: "/berita/3",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-school-800 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-20 after:h-1 after:bg-school-500">
            Berita Terbaru
          </h2>
          <Button variant="outline" className="flex items-center gap-2 text-school-600 border-school-600 hover:bg-school-50">
            <span>Lihat Semua</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <div key={item.id} className="school-card group">
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{item.date}</span>
                </div>
                <h3 className="font-bold text-xl mb-3 line-clamp-2 group-hover:text-school-600 transition-colors">
                  <Link href={item.link}>{item.title}</Link>
                </h3>
                <p className="text-gray-600 line-clamp-3 mb-4">{item.excerpt}</p>
                <Link
                  href={item.link}
                  className="inline-flex items-center text-school-600 font-medium hover:underline"
                >
                  Baca Selengkapnya
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
