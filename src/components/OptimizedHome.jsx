import React, { useMemo, Suspense, lazy, useEffect } from "react";
import { useChunkedHomeData } from "../hooks/useDataFetching";
import { useLoading } from "../contexts/LoadingContext";
import LazySection from "./LazySection";
import { initializePreloading } from "../utils/preloader";

// Lazy load section components for better code splitting
const HeroSection = lazy(() => import('./sections/HeroSection'));
const FeaturesSection = lazy(() => import('./sections/FeaturesSection'));
const ServicesSection = lazy(() => import('./sections/ServicesSection'));
const PortfolioSection = lazy(() => import('./sections/PortfolioSection'));
const BlogSection = lazy(() => import('./sections/BlogSection'));
const TeamSection = lazy(() => import('./sections/TeamSection'));

// Import remaining sections from HomeSections (to be split later)
import {
  TestimonialsSection,
  StatsSection,
  AwardsSection,
  PartnershipsSection
} from './HomeSections';

import {
  HeroSkeleton,
  FeaturesSkeleton,
  ServicesSkeleton,
  PortfolioSkeleton,
  GenericSectionSkeleton
} from "./SectionSkeletons";

const OptimizedHome = React.memo(() => {
  const { chunks, loadSection, loadedSections, isLoading, error } = useChunkedHomeData();
  const { isLoading: globalLoading } = useLoading();

  // Initialize preloading for critical components
  useEffect(() => {
    initializePreloading();
  }, []);

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
    <div className="w-full">
      {/* Hero Section - Always loaded first */}
      <Suspense fallback={<HeroSkeleton />}>
        <HeroSection hero={chunks.hero} />
      </Suspense>
      
      {/* Features Section - Lazy loaded */}
      <LazySection
        fallback={<FeaturesSkeleton />}
        component={FeaturesSection}
        props={{ features: chunks.features }}
        threshold={0.1}
        sectionName="features"
        loadSection={loadSection}
      />
      
      {/* Services Section - Lazy loaded */}
      <LazySection
        fallback={<ServicesSkeleton />}
        component={ServicesSection}
        props={{ services: chunks.services }}
        threshold={0.1}
        sectionName="services"
        loadSection={loadSection}
      />
      
      {/* Portfolio Section - Lazy loaded */}
      <LazySection
        fallback={<PortfolioSkeleton />}
        component={PortfolioSection}
        props={{ portfolio: chunks.portfolio }}
        threshold={0.1}
        sectionName="portfolio"
        loadSection={loadSection}
      />
      
      {/* Team Section - Lazy loaded */}
      <LazySection
        fallback={<GenericSectionSkeleton bgColor="bg-gray-50" itemCount={3} />}
        component={TeamSection}
        props={{ team: chunks.team }}
        threshold={0.1}
        sectionName="team"
        loadSection={loadSection}
      />
      
      {/* Testimonials Section - Lazy loaded */}
      <LazySection
        fallback={<GenericSectionSkeleton bgColor="bg-blue-50" itemCount={3} />}
        component={TestimonialsSection}
        props={{ testimonials: chunks.testimonials }}
        threshold={0.1}
        sectionName="testimonials"
        loadSection={loadSection}
      />
      
      {/* Stats Section - Lazy loaded */}
      <LazySection
        fallback={<GenericSectionSkeleton bgColor="bg-gray-900" itemCount={4} />}
        component={StatsSection}
        props={{ stats: chunks.stats }}
        threshold={0.1}
        sectionName="stats"
        loadSection={loadSection}
      />
      
      {/* Awards Section - Lazy loaded */}
      <LazySection
        fallback={<GenericSectionSkeleton bgColor="bg-white" itemCount={3} />}
        component={AwardsSection}
        props={{ awards: chunks.awards }}
        threshold={0.1}
        sectionName="awards"
        loadSection={loadSection}
      />
      
      {/* Partnerships Section - Lazy loaded */}
      <LazySection
        fallback={<GenericSectionSkeleton bgColor="bg-gray-50" itemCount={3} />}
        component={PartnershipsSection}
        props={{ partnerships: chunks.partnerships }}
        threshold={0.1}
        sectionName="partnerships"
        loadSection={loadSection}
      />
      
      {/* Blog Section - Lazy loaded */}
      <LazySection
        fallback={<GenericSectionSkeleton bgColor="bg-white" itemCount={3} />}
        component={BlogSection}
        props={{ blog: chunks.blog }}
        threshold={0.1}
        sectionName="blog"
        loadSection={loadSection}
      />
    </div>
  );
});

OptimizedHome.displayName = 'OptimizedHome';

export default OptimizedHome;