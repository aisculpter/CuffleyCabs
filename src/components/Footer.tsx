import React from 'react';
import { Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-[#D4AF37]">Cuffley</span> Cabs
            </h3>
            <p className="mb-4">
              Your reliable transportation partner in Hertfordshire. 
              Providing premium cab services 24/7 for all your travel needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#D4AF37] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#D4AF37] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#D4AF37] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-[#D4AF37] transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a></li>
              <li><a href="#booking" className="hover:text-[#D4AF37] transition-colors">Book Online</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              <li>Cuffley</li>
              <li>Potters Bar</li>
              <li>Brookmans Park</li>
              <li>Goffs Oak</li>
              <li>Enfield</li>
              <li>And all surrounding areas</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone size={18} className="text-[#D4AF37] mr-2" />
                <a href="tel:+441234567890" className="hover:text-[#D4AF37] transition-colors">
                  +44 (0) 1234 567890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-[#D4AF37] mr-2" />
                <a href="mailto:bookings@cuffleycabs.com" className="hover:text-[#D4AF37] transition-colors">
                  bookings@cuffleycabs.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {currentYear} Cuffley Cabs. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;