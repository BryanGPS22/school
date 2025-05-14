
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ProgramsOverview: React.FC = () => {
  const programs = [
    {
      icon: "📚",
      title: "Program Reguler",
      description: "Kurikulum nasional dengan penguatan ilmu-ilmu agama Islam",
      link: "/program-reguler",
    },
    {
      icon: "🧪",
      title: "Program Sains",
      description: "Pendalaman di bidang Matematika dan Ilmu Pengetahuan Alam",
      link: "/program-sains",
    },
    {
      icon: "🌐",
      title: "Program Keagamaan",
      description: "Pendalaman di bidang ilmu-ilmu agama dan bahasa Arab",
      link: "/program-keagamaan",
    },
    {
      icon: "📝",
      title: "Program Bahasa",
      description: "Pendalaman di bidang Bahasa Indonesia, Inggris, dan Arab",
      link: "/program-bahasa",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-school-800 mb-4">
            Program Unggulan
          </h2>
          <p className="text-gray-600">
            Madrasah Aliyah Negeri menawarkan berbagai program unggulan yang dirancang untuk mengembangkan potensi peserta didik secara komprehensif.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-6 text-center border-t-4 border-school-500"
            >
              <div className="text-4xl mb-4">{program.icon}</div>
              <h3 className="text-xl font-bold text-school-800 mb-3">{program.title}</h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <Link 
                href={program.link} 
                className="text-school-600 font-medium hover:underline"
              >
                Pelajari Selengkapnya
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            className="bg-school-600 hover:bg-school-700 text-white"
            asChild
          >
            <Link href="/program-unggulan">Lihat Semua Program</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsOverview;
