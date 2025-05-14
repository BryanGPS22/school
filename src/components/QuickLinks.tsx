
import React from "react";
import Link from "next/link";

const QuickLinks: React.FC = () => {
  const links = [
    {
      title: "PPDB Online",
      description: "Penerimaan peserta didik baru tahun ajaran 2023/2024",
      link: "/ppdb",
      image: "https://placehold.co/400x300/2a753e/ffffff?text=PPDB",
    },
    {
      title: "E-Learning",
      description: "Akses pembelajaran online untuk siswa dan guru",
      link: "/e-learning",
      image: "https://placehold.co/400x300/245e33/ffffff?text=E-Learning",
    },
    {
      title: "Perpustakaan",
      description: "Katalog buku dan jurnal digital perpustakaan",
      link: "/perpustakaan",
      image: "https://placehold.co/400x300/1f4a2b/ffffff?text=Perpustakaan",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-school-800 text-center mb-12 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/3 after:h-1 after:bg-school-500">
          Akses Cepat
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <Link 
              key={index} 
              href={link.link}
              className="block group overflow-hidden rounded-lg relative h-48"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
              <img
                src={link.image}
                alt={link.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-school-200 transition-colors">
                  {link.title}
                </h3>
                <p className="text-white/80 text-sm">{link.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
