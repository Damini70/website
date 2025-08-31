import React from 'react';

// Base skeleton component
const SkeletonBox = ({ className = '', height = 'h-4' }) => (
  <div className={`bg-gray-200 rounded animate-pulse ${height} ${className}`}></div>
);

// Hero Section Skeleton
export const HeroSkeleton = () => (
  <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
    <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <SkeletonBox className="mx-auto mb-6" height="h-16 w-3/4" />
      <SkeletonBox className="mx-auto mb-8" height="h-8 w-2/3" />
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <SkeletonBox height="h-12 w-32" />
        <SkeletonBox height="h-12 w-32" />
      </div>
    </div>
  </section>
);

// Features Section Skeleton
export const FeaturesSkeleton = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <SkeletonBox className="mx-auto mb-6" height="h-12 w-1/2" />
        <SkeletonBox className="mx-auto" height="h-6 w-2/3" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
            <SkeletonBox className="mx-auto mb-6" height="h-16 w-16 rounded-full" />
            <SkeletonBox className="mb-4" height="h-6" />
            <SkeletonBox height="h-4" />
            <SkeletonBox className="mt-2" height="h-4 w-3/4" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Services Section Skeleton
export const ServicesSkeleton = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <SkeletonBox className="mx-auto mb-6" height="h-12 w-1/2" />
        <SkeletonBox className="mx-auto" height="h-6 w-2/3" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="group hover:shadow-xl transition-all duration-300 bg-white rounded-xl p-8 border border-gray-100">
            <SkeletonBox className="mb-6" height="h-48 rounded-lg" />
            <SkeletonBox className="mb-4" height="h-6" />
            <SkeletonBox height="h-4" />
            <SkeletonBox className="mt-2" height="h-4 w-2/3" />
            <SkeletonBox className="mt-6" height="h-10 w-1/3 rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Portfolio Section Skeleton
export const PortfolioSkeleton = () => (
  <section className="py-20 bg-gray-900">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <SkeletonBox className="mx-auto mb-6 bg-gray-700" height="h-12 w-1/2" />
        <SkeletonBox className="mx-auto bg-gray-700" height="h-6 w-2/3" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="group relative overflow-hidden rounded-xl bg-gray-800">
            <SkeletonBox className="bg-gray-700" height="h-64" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
              <div className="absolute bottom-6 left-6 right-6">
                <SkeletonBox className="mb-2 bg-gray-600" height="h-6" />
                <SkeletonBox className="bg-gray-600" height="h-4 w-2/3" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Generic Section Skeleton
export const GenericSectionSkeleton = ({ 
  bgColor = 'bg-gray-50', 
  itemCount = 3,
  showTitle = true 
}) => (
  <section className={`py-20 ${bgColor}`}>
    <div className="max-w-7xl mx-auto px-6">
      {showTitle && (
        <div className="text-center mb-16">
          <SkeletonBox className="mx-auto mb-6" height="h-12 w-1/2" />
          <SkeletonBox className="mx-auto" height="h-6 w-2/3" />
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(itemCount)].map((_, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <SkeletonBox className="mb-4" height="h-32" />
            <SkeletonBox className="mb-2" height="h-6" />
            <SkeletonBox height="h-4" />
            <SkeletonBox className="mt-2" height="h-4 w-3/4" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default {
  HeroSkeleton,
  FeaturesSkeleton,
  ServicesSkeleton,
  PortfolioSkeleton,
  GenericSectionSkeleton
};