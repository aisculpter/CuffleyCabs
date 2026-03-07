import React, { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import bgImg from "../bg-img-min.png";
import whtsapp from "../WhatsAppButtonGreenSmall.png";

const Hero: React.FC = () => {
  const taglineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);


  useEffect(() => {
    // Animate tagline typing effect
    if (taglineRef.current) {
      setTimeout(() => {
        taglineRef.current?.classList.remove("w-0");
        taglineRef.current?.classList.add("w-full");
      }, 300);
    }

    // Fade in subtitle
    if (subtitleRef.current) {
      setTimeout(() => {
        subtitleRef.current?.classList.remove("opacity-0");
        subtitleRef.current?.classList.add("opacity-100");
      }, 1000);
    }
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden bg-gray-900">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 opacity-90"></div>

      {/* Static Background Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={bgImg}
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
            // className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-typing overflow-hidden whitespace-nowrap max-w-full mx-auto leading-tight w-fit"
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-typing w-fit max-w-full mx-auto leading-tight text-center"
          >
            <span className="text-[#D4AF37]">Wherever</span> You Need To Go
          </h1>

          {/* Subtitle */}
          <p
          ref={subtitleRef}
          className="text-base sm:text-lg md:text-2xl text-white mb-8 max-w-xs sm:max-w-md md:max-w-3xl mx-auto opacity-0 transition-opacity duration-1000 text-center leading-snug"
          >
          Cuffley's premier car service for local journeys, airport transfers, and nationwide travel
          </p>


          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in">
            {/* WhatsApp Button */}
            <a
              aria-label="Chat on WhatsApp"
              href="https://wa.me/44071200492340"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md p-1 flex items-center justify-center"
            >
              <img
                src={whtsapp}
                alt="WhatsApp"
                className="h-12 w-auto rounded-md"
              />
            </a>

            {/* Book Online Button */}
            <a
              href="#booking"
              className="rounded-md border-2 border-white hover:border-[#D4AF37] text-white hover:text-[#D4AF37] px-6 py-3 text-lg font-medium transition-all duration-300 min-w-[200px] text-center hover:shadow-[0_0_4px_#D4AF37]"
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
