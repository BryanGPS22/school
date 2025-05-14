"use client"
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LatestNews from "@/components/LatestNews";
import ProgramsOverview from "@/components/ProgramsOverview";
import SchoolStats from "@/components/SchoolStats";
import QuickLinks from "@/components/QuickLinks";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      
      <main>
        {/* Welcome Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-school-800 mb-6">
                Selamat Datang di Madrasah Aliyah Negeri
              </h1>
              <p className="text-gray-600 mb-10">
                Madrasah Aliyah Negeri adalah sekolah menengah atas islam negeri yang mengedepankan keunggulan akademik, karakter islami, dan pengembangan potensi peserta didik secara komprehensif.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-6 rounded-lg bg-school-50 border border-school-100">
                  <div className="h-16 w-16 bg-school-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📚</span>
                  </div>
                  <h3 className="font-bold text-lg text-school-800 mb-3">Kurikulum Berkualitas</h3>
                  <p className="text-gray-600">Menerapkan kurikulum yang komprehensif dan terintegrasi dengan nilai-nilai keislaman</p>
                </div>
                <div className="p-6 rounded-lg bg-school-50 border border-school-100">
                  <div className="h-16 w-16 bg-school-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <h3 className="font-bold text-lg text-school-800 mb-3">Pendidikan Karakter</h3>
                  <p className="text-gray-600">Pembinaan akhlak mulia dan pengembangan karakter islami peserta didik</p>
                </div>
                <div className="p-6 rounded-lg bg-school-50 border border-school-100">
                  <div className="h-16 w-16 bg-school-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌟</span>
                  </div>
                  <h3 className="font-bold text-lg text-school-800 mb-3">Prestasi Gemilang</h3>
                  <p className="text-gray-600">Berbagai prestasi akademik dan non-akademik di tingkat lokal, nasional, dan internasional</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <ProgramsOverview />
        <LatestNews />
        <SchoolStats />
        <QuickLinks />
        <Testimonials />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
