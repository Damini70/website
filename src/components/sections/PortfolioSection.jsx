import React, { useMemo } from 'react';
import OptimizedImage from '../OptimizedImage';
import VirtualizedList from '../VirtualizedList';

// Portfolio Section Component
const PortfolioSection = React.memo(({ portfolio }) => {
  if (!portfolio || portfolio.length === 0) return null;

  const memoizedPortfolio = useMemo(() => {
    return portfolio.map((item) => (
      <PortfolioCard key={item.id} item={item} />
    ));
  }, [portfolio]);

  const renderPortfolioItem = (item, index) => (
    <PortfolioCard key={item.id || index} item={item} />
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our best work and successful projects
          </p>
        </div>
        {portfolio.length > 6 ? (
          <VirtualizedList
            items={portfolio}
            renderItem={renderPortfolioItem}
            itemHeight={400}
            containerHeight={800}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {memoizedPortfolio}
          </div>
        )}
      </div>
    </section>
  );
});

// Individual Portfolio Card Component
const PortfolioCard = React.memo(({ item }) => (
  <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
    <div className="relative overflow-hidden">
      <OptimizedImage
        src={item.image}
        alt={item.title}
        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
        <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold">
            View Project
          </button>
        </div>
      </div>
    </div>
    <div className="p-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-blue-600 font-semibold">{item.category}</span>
        <span className="text-sm text-gray-500">{item.date}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
    </div>
  </div>
));

PortfolioSection.displayName = 'PortfolioSection';
PortfolioCard.displayName = 'PortfolioCard';

export default PortfolioSection;