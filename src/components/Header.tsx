import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black py-2 shadow-lg' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-white font-bold text-2xl">
            <span className="text-[#D4AF37]">Cuffley</span> Cabs
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#services"
            className="text-white hover:text-[#D4AF37] transition-colors duration-300"
          >
            Services
          </a>
          <a
            href="#about"
            className="text-white hover:text-[#D4AF37] transition-colors duration-300"
          >
            About Us
          </a>
          <a
            href="#testimonials"
            className="text-white hover:text-[#D4AF37] transition-colors duration-300"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="text-white hover:text-[#D4AF37] transition-colors duration-300"
          >
            Contact
          </a>
          <a
            href="tel:+441234567890"
            className="flex items-center bg-[#D4AF37] hover:bg-[#C4A030] text-black px-4 py-2 rounded-md transition-colors duration-300"
          >
            <Phone size={16} className="mr-2" />
            <span className="font-medium">Call Now</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#services"
              className="text-white hover:text-[#D4AF37] transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="text-white hover:text-[#D4AF37] transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#testimonials"
              className="text-white hover:text-[#D4AF37] transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-white hover:text-[#D4AF37] transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="tel:+441234567890"
              className="flex items-center justify-center bg-[#D4AF37] hover:bg-[#C4A030] text-black px-4 py-2 rounded-md transition-colors duration-300"
            >
              <Phone size={16} className="mr-2" />
              <span className="font-medium">Call Now</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;