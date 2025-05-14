
import React from "react";

const SchoolStats: React.FC = () => {
  const stats = [
    { label: "Tahun Berdiri", value: "1976" },
    { label: "Guru & Staf", value: "75+" },
    { label: "Siswa", value: "1200+" },
    { label: "Alumni", value: "10,000+" },
  ];

  return (
    <section className="py-16 bg-school-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Madrasah Dalam Angka</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Beberapa data dan fakta tentang Madrasah Aliyah Negeri yang menunjukkan kredibilitas dan pencapaian kami.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
              <p className="text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolStats;
