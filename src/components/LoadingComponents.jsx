import React, { useMemo } from 'react';



// Navbar loading placeholder
export const NavbarSkeleton = () => {
  const memoizedNavItems = useMemo(() => {
    return [1, 2, 3, 4].map((i) => (
      <div key={i} className="h-6 w-16 bg-blue-500 rounded animate-pulse"></div>
    ));
  }, []);

  return (
    <div className="flex justify-between items-center h-16">
      <div className="h-8 w-32 bg-blue-500 rounded animate-pulse"></div>
      <div className="flex space-x-4">
        {memoizedNavItems}
      </div>
    </div>
  );
};

// Footer loading placeholder
export const FooterSkeleton = () => {
  const memoizedFooterColumns = useMemo(() => {
    return [1, 2, 3, 4].map((i) => (
      <div key={i} className="space-y-4">
        <div className="h-6 bg-gray-700 rounded w-3/4"></div>
        <div className="space-y-2">
          {[1, 2, 3, 4].map((j) => (
            <div key={j} className="h-4 bg-gray-700 rounded w-full"></div>
          ))}
        </div>
      </div>
    ));
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-pulse">
          {memoizedFooterColumns}
        </div>
      </div>
    </div>
  );
};

// Error boundary fallback
export const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">
      <div className="text-red-500 text-6xl mb-4">⚠️</div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Oops! Something went wrong</h2>
      <p className="text-gray-600 mb-6">We're sorry, but there was an error loading this page.</p>
      <button
        onClick={resetErrorBoundary}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Try Again
      </button>
    </div>
  </div>
);