
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero: React.FC = () => {
  const slides = [
    {
      image: "https://placehold.co/1920x600/2a753e/ffffff?text=Madrasah+Aliyah+Negeri",
      title: "Selamat Datang di Madrasah Aliyah Negeri",
      description: "Mencetak generasi unggul yang berprestasi dan berakhlak mulia",
      buttonText: "Selengkapnya",
      buttonLink: "/profil",
    },
    {
      image: "https://placehold.co/1920x600/245e33/ffffff?text=PPDB+Dibuka",
      title: "Penerimaan Peserta Didik Baru",
      description: "Pendaftaran telah dibuka untuk tahun ajaran 2023/2024",
      buttonText: "Daftar Sekarang",
      buttonLink: "/ppdb",
    },
    {
      image: "https://placehold.co/1920x600/1f4a2b/ffffff?text=Program+Unggulan",
      title: "Program Unggulan Madrasah",
      description: "Menggali potensi siswa melalui program akademik dan non-akademik berkualitas",
      buttonText: "Program Unggulan",
      buttonLink: "/program-unggulan",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[500px] sm:h-[550px] md:h-[600px] overflow-hidden">
      {/* Carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-lg text-white animate-fade-in">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-6 text-white/90">
                    {slide.description}
                  </p>
                  <Button 
                    variant="default" 
                    className="bg-school-500 hover:bg-school-600"
                    asChild
                  >
                    <Link href={slide.buttonLink}>{slide.buttonText}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition-all"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition-all"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
