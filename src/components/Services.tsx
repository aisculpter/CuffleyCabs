import React from 'react';
import { MapPin, Plane, Map, Clock } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
      <div className="text-[#D4AF37] mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From quick local journeys to cross-country travel, our professional drivers 
            ensure you arrive safely, comfortably, and on time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard 
            icon={<MapPin size={40} />}
            title="Local Journeys"
            description="Reliable transport for all your local needs around Cuffley and Hertfordshire. Perfect for shopping trips, appointments, or social events."
          />
          <ServiceCard 
            icon={<Plane size={40} />}
            title="Airport Transfers"
            description="Stress-free airport pickups and drop-offs to all major UK airports. We track flight times to ensure punctual service regardless of delays."
          />
          <ServiceCard 
            icon={<Map size={40} />}
            title="Nationwide Travel"
            description="Long-distance travel to any UK destination. Comfortable vehicles and experienced drivers make even the longest journeys pleasant."
          />
          <ServiceCard 
            icon={<Clock size={40} />}
            title="24/7 Availability"
            description="Our service operates around the clock. Whether it's an early morning flight or late-night return, we're always available."
          />
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-6">Serving Cuffley and Beyond</h3>
          <div className="max-w-3xl mx-auto bg-black text-white rounded-lg p-6 shadow-lg">
            <p className="mb-4">
              We proudly serve Cuffley and surrounding areas in Hertfordshire, including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-6">
              <div className="px-3 py-2 bg-gray-800 rounded">Potters Bar</div>
              <div className="px-3 py-2 bg-gray-800 rounded">Brookmans Park</div>
              <div className="px-3 py-2 bg-gray-800 rounded">Goffs Oak</div>
              <div className="px-3 py-2 bg-gray-800 rounded">Northaw</div>
              <div className="px-3 py-2 bg-gray-800 rounded">Cheshunt</div>
              <div className="px-3 py-2 bg-gray-800 rounded">Enfield</div>
            </div>
            <p className="text-[#D4AF37] font-medium">
              For longer journeys, we cover all major UK cities and destinations!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;