import React from 'react';
import OptimizedImage from '../OptimizedImage';

// Hero Section Component
const HeroSection = React.memo(({ hero }) => {
  if (!hero) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {hero.title}
        </h1>
        <p className="text-xl sm:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
          {hero.subtitle || hero.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            {hero.cta?.primary || 'Get Started'}
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
            {hero.cta?.secondary || 'Learn More'}
          </button>
        </div>
      </div>
      {hero.image && (
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src={hero.image}
            alt={hero.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;