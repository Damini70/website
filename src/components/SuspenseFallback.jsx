import React from 'react';

// Generic fallback component for Suspense - Always shows loader
export const SuspenseFallback = ({ type = 'default' }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="text-center">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-600 mx-auto mb-6"></div>
          <div className="absolute inset-0 rounded-full h-16 w-16 border-4 border-transparent border-r-purple-400 animate-spin mx-auto" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
        </div>
        <div className="space-y-2">
          <p className="text-lg font-medium text-gray-700">Loading...</p>
          <p className="text-sm text-gray-500">Please wait while we prepare your content</p>
        </div>
      </div>
    </div>
  );
};

export default SuspenseFallback;