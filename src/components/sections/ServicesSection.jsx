import React, { useMemo } from 'react';

// Services Section Component
const ServicesSection = React.memo(({ services }) => {
  if (!services || services.length === 0) return null;

  const memoizedServices = useMemo(() => {
    return services.map((service) => (
      <ServiceCard key={service.id} service={service} />
    ));
  }, [services]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions tailored to meet your unique business needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memoizedServices}
        </div>
      </div>
    </section>
  );
});

// Individual Service Card Component
const ServiceCard = React.memo(({ service }) => (
  <div className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300">
    <div className="text-4xl mb-4">{service.icon}</div>
    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
    <div className="text-blue-600 font-semibold">{service.price}</div>
  </div>
));

ServicesSection.displayName = 'ServicesSection';
ServiceCard.displayName = 'ServiceCard';

export default ServicesSection;