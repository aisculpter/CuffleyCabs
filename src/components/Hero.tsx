import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const taglineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Animate tagline typing effect
    if (taglineRef.current) {
      setTimeout(() => {
        taglineRef.current?.classList.remove('w-0');
        taglineRef.current?.classList.add('w-full');
      }, 500);
    }

    // Fade in subtitle
    if (subtitleRef.current) {
      setTimeout(() => {
        subtitleRef.current?.classList.remove('opacity-0');
        subtitleRef.current?.classList.add('opacity-100');
      }, 2000);
    }
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden bg-gray-900">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 opacity-90"></div>

      {/* Static Car Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
          alt="Luxury Car"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
        <div className="space-y-6">
          {/* Animated Tagline */}
          <h1 
            ref={taglineRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-typing"
                >
          <span className="text-[#D4AF37]">Wherever</span> You Need To Go
        </h1>
          
          {/* Subtitle with fade in */}
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto opacity-0 transition-opacity duration-1000"
          >
            Cuffley's premier car service for local journeys, airport transfers, and nationwide travel
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in">
            <a
              href="tel:+441234567890"
              className="bg-[#D4AF37] hover:bg-[#C4A030] text-black px-8 py-3 rounded-md text-lg font-medium transition-colors duration-300 min-w-[200px]"
            >
              Call Now
            </a>
            <a
              href="#booking"
              className="bg-transparent border-2 border-white hover:border-[#D4AF37] text-white hover:text-[#D4AF37] px-8 py-3 rounded-md text-lg font-medium transition-colors duration-300 min-w-[200px]"
            >
              Book Online
            </a>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <button
          onClick={scrollToServices}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={40} />
        </button>
      </div>
    </section>
  );
};

export default Hero;