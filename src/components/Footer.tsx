import React, { useState } from 'react';
import { Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import Modal from './Modal';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  
  return (
    <>
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
              <button 
                onClick={() => setIsPrivacyOpen(true)}
                className="hover:text-[#D4AF37] transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setIsTermsOpen(true)}
                className="hover:text-[#D4AF37] transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>

      <Modal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        title="Privacy Policy"
      >
        <div className="prose prose-sm max-w-none">
          <h4 className="text-lg font-semibold mb-4">1. Information We Collect</h4>
          <p className="mb-4">
            We collect information you provide directly to us, including name, email address, phone number, 
            and journey details when you make a booking or contact us.
          </p>

          <h4 className="text-lg font-semibold mb-4">2. How We Use Your Information</h4>
          <p className="mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Process your bookings and provide our services</li>
            <li>Communicate with you about your journeys</li>
            <li>Send you important service updates</li>
            <li>Improve our services and develop new features</li>
          </ul>

          <h4 className="text-lg font-semibold mb-4">3. Information Sharing</h4>
          <p className="mb-4">
            We do not sell or share your personal information with third parties except as necessary 
            to provide our services or comply with legal obligations.
          </p>

          <h4 className="text-lg font-semibold mb-4">4. Data Security</h4>
          <p className="mb-4">
            We implement appropriate security measures to protect your personal information from 
            unauthorized access, alteration, or disclosure.
          </p>

          <h4 className="text-lg font-semibold mb-4">5. Your Rights</h4>
          <p>
            You have the right to access, correct, or delete your personal information. Contact us 
            at privacy@cuffleycabs.com for any privacy-related concerns.
          </p>
        </div>
      </Modal>

      <Modal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
        title="Terms of Service"
      >
        <div className="prose prose-sm max-w-none">
          <h4 className="text-lg font-semibold mb-4">1. Service Agreement</h4>
          <p className="mb-4">
            By using our services, you agree to these terms and conditions. We reserve the right 
            to modify these terms at any time.
          </p>

          <h4 className="text-lg font-semibold mb-4">2. Booking and Cancellation</h4>
          <p className="mb-4">
            - Bookings are subject to availability
            - Cancellations must be made at least 2 hours before the scheduled journey
            - Late cancellations may incur a fee
          </p>

          <h4 className="text-lg font-semibold mb-4">3. Payment Terms</h4>
          <p className="mb-4">
            - Payment is required at the end of each journey
            - We accept cash and major credit/debit cards
            - Additional charges may apply for waiting time or route changes
          </p>

          <h4 className="text-lg font-semibold mb-4">4. Customer Responsibilities</h4>
          <p className="mb-4">
            - Provide accurate pickup and destination information
            - Ensure timely arrival at the pickup location
            - Maintain appropriate behavior during the journey
            - Comply with safety instructions
          </p>

          <h4 className="text-lg font-semibold mb-4">5. Liability</h4>
          <p className="mb-4">
            We are not liable for delays or service disruptions due to circumstances beyond our 
            control, including but not limited to weather conditions, traffic, or road works.
          </p>

          <h4 className="text-lg font-semibold mb-4">6. Lost Property</h4>
          <p>
            While we make every effort to return lost items, we are not responsible for any 
            personal belongings left in our vehicles. Contact us immediately if you believe 
            you've left something behind.
          </p>
        </div>
      </Modal>
    </>
  );
};

export default Footer;