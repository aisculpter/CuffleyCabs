import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Williams",
    location: "Cuffley",
    text: "I use Cuffley Cabs regularly for my commute and they've never let me down. Always on time, clean cars, and friendly drivers.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 2,
    name: "James Thompson",
    location: "Potters Bar",
    text: "The airport transfer service is excellent. My flight was delayed, but the driver tracked it and was waiting for me when I arrived. Exceptional service!",
    rating: 5,
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 3,
    name: "Emma Richardson",
    location: "Brookmans Park",
    text: "I was impressed by the professionalism of the driver during our trip to London. Safe driving, knowledge of the area, and a pleasant conversation.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 4,
    name: "David Clark",
    location: "Enfield",
    text: "Used their service for a business trip to Manchester. The journey was comfortable, and the driver was punctual and professional. Highly recommend!",
    rating: 4,
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full border-4 border-[#D4AF37]">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i}
            size={16} 
            className={i < testimonial.rating ? "text-[#D4AF37] fill-[#D4AF37]" : "text-gray-300"}
          />
        ))}
      </div>
      <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
      <p className="font-semibold">{testimonial.name}</p>
      <p className="text-sm text-gray-500">{testimonial.location}</p>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPer = {
    mobile: 1,
    tablet: 2,
    desktop: 3
  };
  
  const totalSlides = Math.ceil(testimonials.length / testimonialsPer.desktop);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what some of our regular customers have to say 
            about their experience with Cuffley Cabs.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {/* Mobile View (1 testimonial) */}
              <div className="w-full flex-none md:hidden">
                <div className="px-4">
                  <TestimonialCard testimonial={testimonials[currentIndex % testimonials.length]} />
                </div>
              </div>
              
              {/* Tablet View (2 testimonials) */}
              <div className="hidden md:flex lg:hidden w-full flex-none">
                <div className="w-1/2 px-4">
                  <TestimonialCard testimonial={testimonials[currentIndex % testimonials.length]} />
                </div>
                <div className="w-1/2 px-4">
                  <TestimonialCard testimonial={testimonials[(currentIndex + 1) % testimonials.length]} />
                </div>
              </div>
              
              {/* Desktop View (3 testimonials) */}
              <div className="hidden lg:flex w-full flex-none">
                {[0, 1, 2].map(offset => (
                  <div key={offset} className="w-1/3 px-4">
                    <TestimonialCard testimonial={testimonials[(currentIndex + offset) % testimonials.length]} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-lg hover:bg-[#D4AF37] transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-lg hover:bg-[#D4AF37] transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Testimonial Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: testimonials.length }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-[#D4AF37]" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;