import React, { useMemo } from 'react';
import { useServicesData } from '../hooks/useDataFetching';
import { useLoading } from '../contexts/LoadingContext';
import { HeroSkeleton, ServicesSkeleton, GenericSectionSkeleton } from './SectionSkeletons';

const Service = () => {
  const { data: servicesData, loading, error } = useServicesData();
  const { isLoading } = useLoading();

  if (loading || isLoading('services')) {
    return (
      <div className="w-full">
        <HeroSkeleton />
        <ServicesSkeleton />
        <GenericSectionSkeleton bgColor="bg-gray-50" itemCount={3} />
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

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive digital solutions to help your business grow and succeed in the modern world.
          </p>
        </section>

        {/* Services Grid */}
        <section>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useMemo(() => {
              return servicesData?.map((service) => (
                <div 
                  key={service.id} 
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                      Learn More
                    </button>
                  </div>
                </div>
              )) || [];
            }, [servicesData])}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can help bring your vision to life.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Contact Us Today
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Service;