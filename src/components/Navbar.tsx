
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Beranda", link: "/" },
    { 
      name: "Profil", 
      link: "/profil",
      hasDropdown: true,
      dropdownItems: [
        { name: "Visi & Misi", link: "/visi-misi" },
        { name: "Sejarah", link: "/sejarah" },
        { name: "Struktur Organisasi", link: "/struktur-organisasi" }
      ]
    },
    {
      name: "Akademik",
      link: "/akademik",
      hasDropdown: true,
      dropdownItems: [
        { name: "Program Unggulan", link: "/program-unggulan" },
        { name: "Kurikulum", link: "/kurikulum" },
        { name: "Prestasi", link: "/prestasi" }
      ]
    },
    { name: "Berita", link: "/berita" },
    { name: "Galeri", link: "/galeri" },
    { name: "PPDB", link: "/ppdb" },
    { name: "Kontak", link: "/kontak" }
  ];

  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const handleDropdownToggle = (index: number) => {
    if (openDropdown === index) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(index);
    }
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4">
        {/* Top Header */}
        <div className="hidden lg:flex justify-between items-center py-2 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Email: admin@madrasah.edu</span>
            <span className="text-sm text-gray-600">Telp: (0274) 123456</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-sm">Login</Button>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Cari..." 
                className="py-1 px-3 text-sm rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-school-500 focus:border-school-500"
              />
              <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
        
        {/* Main Navbar */}
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <img 
              src="https://placehold.co/60x60?text=Logo" 
              alt="School Logo" 
              className="h-10 w-10"
            />
            <div>
              <h1 className="font-bold text-lg text-school-800">MADRASAH</h1>
              <p className="text-xs text-gray-600">Madrasah Aliyah Negeri Contoh</p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex items-center space-x-1">
              {navLinks.map((item, index) => (
                <li key={index} className="relative group">
                  {item.hasDropdown ? (
                    <>
                      <button 
                        className="nav-link flex items-center"
                        onClick={() => handleDropdownToggle(index)}
                      >
                        {item.name} 
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      <div className={`absolute top-full left-0 w-56 bg-white shadow-lg rounded-md py-2 transition-all duration-300 ${openDropdown === index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                        {item.dropdownItems?.map((dropItem, idx) => (
                          <Link 
                            key={idx} 
                            href={dropItem.link} 
                            className="block px-4 py-2 text-sm hover:bg-school-50 hover:text-school-600"
                          >
                            {dropItem.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link href={item.link} className="nav-link">
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="lg:hidden text-gray-700 hover:text-school-600"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-lg`}>
        <div className="container mx-auto px-4 py-3">
          <ul className="space-y-2">
            {navLinks.map((item, index) => (
              <li key={index}>
                {item.hasDropdown ? (
                  <div>
                    <button 
                      className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-school-600"
                      onClick={() => handleDropdownToggle(index)}
                    >
                      {item.name}
                      <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === index ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`pl-4 space-y-1 mt-1 ${openDropdown === index ? 'block' : 'hidden'}`}>
                      {item.dropdownItems?.map((dropItem, idx) => (
                        <Link 
                          key={idx} 
                          href={dropItem.link} 
                          className="block py-2 text-gray-600 hover:text-school-600"
                          onClick={() => setIsOpen(false)}
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link 
                    href={item.link} 
                    className="block py-2 text-gray-700 hover:text-school-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
            <li className="pt-2 border-t border-gray-200">
              <div className="flex space-x-2 items-center">
                <input
                  type="text"
                  placeholder="Cari..."
                  className="flex-1 py-2 px-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-school-500 focus:border-school-500"
                />
                <Button size="sm" className="bg-school-600 hover:bg-school-700">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </li>
            <li>
              <Button variant="outline" className="w-full mt-2">Login</Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
