
import React from "react";
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="bg-school-800 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Column */}
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="https://placehold.co/60x60?text=Logo" 
                  alt="School Logo" 
                  className="h-12 w-12 mr-3"
                />
                <div>
                  <h3 className="font-bold text-lg">MADRASAH</h3>
                  <p className="text-xs text-gray-300">Madrasah Aliyah Negeri Contoh</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Madrasah yang unggul dalam prestasi, kompetitif dalam persaingan, dan islami dalam perilaku.
              </p>
              <div className="flex space-x-3">
                <Link href="https://facebook.com" className="bg-school-700 hover:bg-school-600 h-9 w-9 rounded-full flex items-center justify-center transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="https://twitter.com" className="bg-school-700 hover:bg-school-600 h-9 w-9 rounded-full flex items-center justify-center transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="https://instagram.com" className="bg-school-700 hover:bg-school-600 h-9 w-9 rounded-full flex items-center justify-center transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="https://youtube.com" className="bg-school-700 hover:bg-school-600 h-9 w-9 rounded-full flex items-center justify-center transition-colors">
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Links Column */}
           

            {/* Contact Column */}
            <div>
              <h3 className="font-bold text-lg mb-4">Informasi Kontak</h3>
              <ul className="space-y-3">
                <li className="flex">
                  <MapPin className="h-5 w-5 mr-3 text-school-400 flex-shrink-0" />
                  <span className="text-gray-300">Jl. Contoh Alamat No. 123, Yogyakarta</span>
                </li>
                <li className="flex">
                  <Phone className="h-5 w-5 mr-3 text-school-400 flex-shrink-0" />
                  <span className="text-gray-300">(0274) 123456</span>
                </li>
                <li className="flex">
                  <Mail className="h-5 w-5 mr-3 text-school-400 flex-shrink-0" />
                  <span className="text-gray-300">info@madrasah.edu</span>
                </li>
                <li className="flex">
                  <Clock className="h-5 w-5 mr-3 text-school-400 flex-shrink-0" />
                  <span className="text-gray-300">Senin - Sabtu: 07.00 - 15.00 WIB</span>
                </li>
              </ul>
            </div>

            {/* Map Column */}
            <div>
              <h3 className="font-bold text-lg mb-4">Lokasi Kami</h3>
              <div className="h-48 bg-gray-700 rounded-md overflow-hidden">
                {/* Replace with actual Google Maps embed */}
                <div className="h-full w-full flex items-center justify-center bg-school-700">
                  <MapPin className="h-8 w-8" />
                  <span className="ml-2">Peta Lokasi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-school-900 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2023 Madrasah Aliyah Negeri. Hak Cipta Dilindungi.
            </p>
            <div className="mt-3 md:mt-0">
              <ul className="flex space-x-4 text-sm">
                <li>
                  <Link href="/kebijakan-privasi" className="text-gray-400 hover:text-white transition-colors">
                    Kebijakan Privasi
                  </Link>
                </li>
                <li>
                  <Link href="/syarat-ketentuan" className="text-gray-400 hover:text-white transition-colors">
                    Syarat & Ketentuan
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
