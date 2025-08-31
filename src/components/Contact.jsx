import React, { useState, useMemo } from 'react';
import { useContactData } from '../hooks/useDataFetching';
import { useLoading } from '../contexts/LoadingContext';
import { HeroSkeleton, GenericSectionSkeleton } from './SectionSkeletons';

const Contact = () => {
  const { data: contactData, loading, error } = useContactData();
  const { isLoading } = useLoading();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  if (loading || isLoading('contact')) {
    return (
      <div className="w-full">
        <HeroSkeleton />
        <GenericSectionSkeleton bgColor="bg-white" itemCount={1} />
        <GenericSectionSkeleton bgColor="bg-gray-50" itemCount={3} />
        <GenericSectionSkeleton bgColor="bg-blue-50" itemCount={1} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Content</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  const processedData = useMemo(() => {
    if (!contactData) return { contactInfo: [], mapData: null };
    
    return {
      contactInfo: contactData.filter(item => item.section === 'contactInfo'),
      mapData: contactData.find(item => item.section === 'map')
    };
  }, [contactData]);

  const { contactInfo, mapData } = processedData;

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get in touch with us. We'd love to hear from you and discuss how we can help your business grow.
          </p>
        </section>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Get In Touch
            </h2>
            
            {/* Contact Info Cards */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info) => (
                <div key={info.id} className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img 
                      src={info.icon} 
                      alt={info.type}
                      className="w-12 h-12 rounded-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {info.type}
                    </h3>
                    <p className="text-gray-600">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Section */}
            {mapData && (
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={mapData.image} 
                  alt={mapData.title}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {mapData.title}
                  </h3>
                  <p className="text-gray-600">
                    {mapData.description}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us more about your project or inquiry..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;