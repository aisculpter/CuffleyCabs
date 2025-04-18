import React from 'react';
import { Shield, ThumbsUp, Clock, Award } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start">
      <div className="text-[#D4AF37] mr-4 mt-1">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Hertfordshire's Most Trusted Cab Service
            </h2>
            <p className="text-gray-600 mb-8">
              With over 15 years of service in Cuffley and surrounding areas, we've built a reputation 
              for reliability, professionalism, and exceptional customer care. Our fleet of modern, 
              well-maintained vehicles and our team of experienced, vetted drivers ensure you always 
              receive the highest standard of service.
            </p>
            
            <div className="space-y-6">
              <Feature 
                icon={<Shield size={24} />}
                title="Safety First"
                description="All our drivers are fully licensed, DBS checked, and undergo rigorous training. Your safety is our top priority."
              />
              <Feature 
                icon={<ThumbsUp size={24} />}
                title="Comfort Guaranteed"
                description="Our premium vehicles are regularly serviced, meticulously cleaned, and equipped with modern amenities for a pleasant journey."
              />
              <Feature 
                icon={<Clock size={24} />}
                title="Punctuality Promise"
                description="We pride ourselves on timeliness. Our drivers arrive 5 minutes early to ensure you're never kept waiting."
              />
              <Feature 
                icon={<Award size={24} />}
                title="Professional Service"
                description="Courteous, smartly dressed drivers who know the area inside out and are committed to providing exceptional service."
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-64 h-64 bg-[#D4AF37] rounded-lg"></div>
              <img 
                src="https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                alt="Professional driver with car" 
                className="relative z-10 rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-black rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;