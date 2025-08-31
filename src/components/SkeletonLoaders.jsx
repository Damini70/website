import React, { useMemo } from 'react';

// Base skeleton component
const SkeletonBase = ({ className = '', children }) => (
  <div className={`animate-pulse ${className}`}>
    {children}
  </div>
);

// Text skeleton
export const TextSkeleton = ({ lines = 1, className = '' }) => {
  const memoizedLines = useMemo(() => {
    return Array.from({ length: lines }).map((_, index) => (
      <div
        key={index}
        className={`bg-gray-300 rounded h-4 mb-2 ${
          index === lines - 1 && lines > 1 ? 'w-3/4' : 'w-full'
        }`}
      />
    ));
  }, [lines]);

  return (
    <SkeletonBase className={className}>
      {memoizedLines}
    </SkeletonBase>
  );
};

// Image skeleton
export const ImageSkeleton = ({ className = '', aspectRatio = 'aspect-video' }) => (
  <SkeletonBase className={className}>
    <div className={`bg-gray-300 rounded ${aspectRatio} w-full`} />
  </SkeletonBase>
);

// Card skeleton
export const CardSkeleton = ({ showImage = true, textLines = 3, className = '' }) => (
  <SkeletonBase className={`bg-white rounded-xl shadow-lg p-6 ${className}`}>
    {showImage && (
      <ImageSkeleton className="mb-4" aspectRatio="aspect-video" />
    )}
    <div className="space-y-3">
      <div className="bg-gray-300 rounded h-6 w-3/4" />
      <TextSkeleton lines={textLines} />
      <div className="bg-gray-300 rounded h-10 w-32" />
    </div>
  </SkeletonBase>
);

// Hero section skeleton
export const HeroSkeleton = () => (
  <SkeletonBase className="relative w-screen h-screen flex items-center justify-center">
    <div className="absolute inset-0 bg-gray-300" />
    <div className="relative text-center px-6 max-w-4xl mx-auto z-10 space-y-6">
      <div className="bg-gray-400 rounded h-16 w-full mb-6" />
      <div className="bg-gray-400 rounded h-8 w-3/4 mx-auto mb-8" />
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <div className="bg-gray-400 rounded-full h-12 w-32" />
        <div className="bg-gray-400 rounded-full h-12 w-32" />
      </div>
    </div>
  </SkeletonBase>
);

// Features grid skeleton
export const FeaturesGridSkeleton = ({ count = 3 }) => (
  <SkeletonBase className="py-20 px-6 md:px-20">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <div className="bg-gray-300 rounded h-12 w-1/2 mx-auto" />
        <div className="bg-gray-300 rounded h-6 w-2/3 mx-auto" />
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {Array.from({ length: count }).map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
    </div>
  </SkeletonBase>
);

// Services grid skeleton
export const ServicesGridSkeleton = ({ count = 6 }) => (
  <SkeletonBase className="min-h-screen bg-gray-50 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 space-y-4">
        <div className="bg-gray-300 rounded h-16 w-1/2 mx-auto" />
        <div className="bg-gray-300 rounded h-6 w-2/3 mx-auto" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: count }).map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
    </div>
  </SkeletonBase>
);

// About page skeleton
export const AboutPageSkeleton = () => (
  <SkeletonBase className="space-y-16 pb-10">
    {/* Hero Section Skeleton */}
    <div className="text-center">
      <div className="relative overflow-hidden h-96">
        <div className="absolute inset-0 bg-gray-300" />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative px-8 py-16 md:py-24 space-y-6">
          <div className="bg-gray-400 rounded h-16 w-1/2 mx-auto" />
          <div className="bg-gray-400 rounded h-8 w-3/4 mx-auto" />
        </div>
      </div>
    </div>

    {/* Mission & Vision Grid Skeleton */}
    <div className="grid md:grid-cols-2 gap-8">
      <CardSkeleton />
      <CardSkeleton />
    </div>

    {/* Team Section Skeleton */}
    <div>
      <div className="bg-gray-300 rounded h-12 w-1/3 mx-auto mb-12" />
      <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
        <div className="bg-gray-300 rounded h-6 w-3/4 mx-auto mb-12" />
        <div className="grid md:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto" />
              <div className="bg-gray-300 rounded h-6 w-3/4 mx-auto" />
              <div className="bg-gray-300 rounded h-4 w-1/2 mx-auto" />
              <div className="bg-gray-300 rounded h-4 w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Values Section Skeleton */}
    <div>
      <div className="text-center mb-12 space-y-4">
        <div className="bg-gray-300 rounded h-12 w-1/3 mx-auto" />
        <div className="bg-gray-300 rounded h-6 w-2/3 mx-auto" />
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg space-y-4">
            <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto" />
            <div className="bg-gray-300 rounded h-6 w-3/4 mx-auto" />
            <div className="bg-gray-300 rounded h-4 w-full" />
          </div>
        ))}
      </div>
    </div>
  </SkeletonBase>
);

// Contact page skeleton
export const ContactPageSkeleton = () => (
  <SkeletonBase className="min-h-screen bg-gray-50 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section Skeleton */}
      <div className="text-center mb-16 space-y-4">
        <div className="bg-gray-300 rounded h-16 w-1/2 mx-auto" />
        <div className="bg-gray-300 rounded h-6 w-2/3 mx-auto" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information Skeleton */}
        <div>
          <div className="bg-gray-300 rounded h-10 w-1/3 mb-8" />
          <div className="space-y-6 mb-8">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full" />
                <div className="space-y-2 flex-1">
                  <div className="bg-gray-300 rounded h-5 w-1/3" />
                  <div className="bg-gray-300 rounded h-4 w-2/3" />
                </div>
              </div>
            ))}
          </div>
          {/* Map Skeleton */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="w-full h-64 bg-gray-300" />
            <div className="p-6 space-y-2">
              <div className="bg-gray-300 rounded h-6 w-1/2" />
              <div className="bg-gray-300 rounded h-4 w-3/4" />
            </div>
          </div>
        </div>

        {/* Contact Form Skeleton */}
        <div>
          <div className="bg-gray-300 rounded h-10 w-1/2 mb-8" />
          <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="bg-gray-300 rounded h-4 w-1/3" />
                <div className="bg-gray-300 rounded h-12 w-full" />
              </div>
              <div className="space-y-2">
                <div className="bg-gray-300 rounded h-4 w-1/3" />
                <div className="bg-gray-300 rounded h-12 w-full" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-gray-300 rounded h-4 w-1/4" />
              <div className="bg-gray-300 rounded h-12 w-full" />
            </div>
            <div className="space-y-2">
              <div className="bg-gray-300 rounded h-4 w-1/4" />
              <div className="bg-gray-300 rounded h-32 w-full" />
            </div>
            <div className="bg-gray-300 rounded h-12 w-full" />
          </div>
        </div>
      </div>
    </div>
  </SkeletonBase>
);

// Home page skeleton
export const HomePageSkeleton = () => (
  <SkeletonBase className="w-full">
    <HeroSkeleton />
    <FeaturesGridSkeleton />
    {/* Stats Section Skeleton */}
    <div className="py-20 bg-gray-300">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="space-y-2">
              <div className="bg-gray-400 rounded h-12 w-full" />
              <div className="bg-gray-400 rounded h-4 w-3/4 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* CTA Section Skeleton */}
    <div className="py-20 px-6 md:px-20 bg-gray-800">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="bg-gray-600 rounded h-12 w-2/3 mx-auto" />
        <div className="bg-gray-600 rounded h-6 w-3/4 mx-auto" />
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="bg-gray-600 rounded-full h-12 w-40" />
          <div className="bg-gray-600 rounded-full h-12 w-32" />
        </div>
      </div>
    </div>
  </SkeletonBase>
);