import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  pickupLocation: string;
  destination: string;
  date: string;
  time: string;
  passengers: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    pickupLocation: '',
    destination: '',
    date: '',
    time: '',
    passengers: '1',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          pickupLocation: '',
          destination: '',
          date: '',
          time: '',
          passengers: '1',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to book a journey or have questions about our services? 
            Get in touch with us through any of the following methods.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="lg:w-1/3">
            <div className="bg-black text-white p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-semibold mb-6 text-[#D4AF37]">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone size={20} className="text-[#D4AF37] mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+441234567890" className="hover:text-[#D4AF37] transition-colors">
                      +44 (0) 1234 567890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={20} className="text-[#D4AF37] mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:bookings@cuffleycabs.com" className="hover:text-[#D4AF37] transition-colors">
                      bookings@cuffleycabs.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin size={20} className="text-[#D4AF37] mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Address</p>
                    <address className="not-italic">
                      Station Road<br />
                      Cuffley<br />
                      Hertfordshire<br />
                      EN6 4HZ
                    </address>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-xl font-semibold mb-4">Operating Hours</h4>
                <div className="space-y-2">
                  <p>Monday - Friday: <span className="text-[#D4AF37]">24 Hours</span></p>
                  <p>Saturday: <span className="text-[#D4AF37]">24 Hours</span></p>
                  <p>Sunday: <span className="text-[#D4AF37]">24 Hours</span></p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Booking Form */}
          <div className="lg:w-2/3" id="booking">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Book Your Journey</h3>
              
              {submitSuccess ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                  <strong className="font-bold">Thank you! </strong>
                  <span className="block sm:inline">Your booking request has been received. We'll contact you shortly to confirm details.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="pickupLocation" className="block text-gray-700 mb-2">Pickup Location *</label>
                      <input
                        type="text"
                        id="pickupLocation"
                        name="pickupLocation"
                        value={formData.pickupLocation}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="destination" className="block text-gray-700 mb-2">Destination *</label>
                      <input
                        type="text"
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="date" className="block text-gray-700 mb-2">Date *</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="time" className="block text-gray-700 mb-2">Time *</label>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="passengers" className="block text-gray-700 mb-2">Passengers *</label>
                      <select
                        id="passengers"
                        name="passengers"
                        value={formData.passengers}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 mb-2">Additional Information</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                      placeholder="Special requirements, luggage information, etc."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex items-center justify-center w-full bg-black text-white py-3 px-4 rounded-md transition-colors duration-300 ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-[#D4AF37] hover:text-black'
                    }`}
                  >
                    {isSubmitting ? (
                      <span>Processing...</span>
                    ) : (
                      <>
                        <MessageSquare size={20} className="mr-2" />
                        <span>Submit Booking Request</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;