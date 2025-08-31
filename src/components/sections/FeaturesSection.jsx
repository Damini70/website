import React, { useMemo } from 'react';
import OptimizedImage from '../OptimizedImage';

// Features Section Component
const FeaturesSection = React.memo(({ features }) => {
  if (!features || features.length === 0) return null;

  const memoizedFeatures = useMemo(() => {
    return features.map((feature) => (
      <FeatureCard key={feature.id} feature={feature} />
    ));
  }, [features]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the powerful features that make us stand out from the competition
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memoizedFeatures}
        </div>
      </div>
    </section>
  );
});

// Individual Feature Card Component
const FeatureCard = React.memo(({ feature }) => (
  <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
    <div className="relative overflow-hidden">
      <OptimizedImage
        src={feature.image}
        alt={feature.title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute top-4 left-4 text-3xl bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md">
        {feature.icon}
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
    </div>
  </div>
));

FeaturesSection.displayName = 'FeaturesSection';
FeatureCard.displayName = 'FeatureCard';

export default FeaturesSection;