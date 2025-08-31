import React, { useMemo, Suspense } from "react";
import { useHomeData } from "../hooks/useDataFetching";
import { useLoading } from "../contexts/LoadingContext";
import LazySection from "./LazySection";

// Lazy load section components for code splitting
const HeroSection = React.lazy(() => import('./HomeSections').then(module => ({ default: module.HeroSection })));
const FeaturesSection = React.lazy(() => import('./HomeSections').then(module => ({ default: module.FeaturesSection })));
const ServicesSection = React.lazy(() => import('./HomeSections').then(module => ({ default: module.ServicesSection })));
const PortfolioSection = React.lazy(() => import('./HomeSections').then(module => ({ default: module.PortfolioSection })));
const TeamSection = React.lazy(() => import('./HomeSections').then(module => ({ default: module.TeamSection })));
const TestimonialsSection = React.lazy(() => import('./HomeSections').then(module => ({ default: module.TestimonialsSection })));
const StatsSection = React.lazy(() => import('./HomeSections').then(module => ({ default: module.StatsSection })));
const AwardsSection = React.lazy(() => import('./HomeSections').then(module => ({ default: module.AwardsSection })));
const PartnershipsSection = React.lazy(() => import('./HomeSections').then(module => ({ default: module.PartnershipsSection })));
const BlogSection = React.lazy(() => import('./HomeSections').then(module => ({ default: module.BlogSection })));
import {
  HeroSkeleton,
  FeaturesSkeleton,
  ServicesSkeleton,
  PortfolioSkeleton,
  GenericSectionSkeleton
} from "./SectionSkeletons";

const Home = React.memo(() => {
  const { data: homeData, loading, error } = useHomeData();
  const { isLoading } = useLoading();

  // Memoize filtered data to prevent re-filtering on every render
  const sectionData = useMemo(() => {
    if (!homeData || homeData.length === 0) {
      return {
        hero: null,
        features: [],
        services: [],
        portfolio: [],
        team: [],
        testimonials: [],
        stats: [],
        process: [],
        gallery: []
      };
    }

    // Group data by section in a single pass for better performance
    const grouped = homeData.reduce((acc, item) => {
      const section = item.section;
      if (section === 'hero') {
        acc.hero = item;
      } else {
        if (!acc[section]) acc[section] = [];
        acc[section].push(item);
      }
      return acc;
    }, {
      hero: null,
      feature: [],
      service: [],
      portfolio: [],
      team: [],
      testimonial: [],
      stats: [],
      process: [],
      gallery: []
    });

    return {
      hero: grouped.hero,
      features: grouped.feature || [],
      services: grouped.service || [],
      portfolio: grouped.portfolio || [],
      team: grouped.team || [],
      testimonials: grouped.testimonial || [],
      stats: grouped.stats || [],
      process: grouped.process || [],
      gallery: grouped.gallery || [],
      awards: grouped.award || [],
      partnerships: grouped.partnership || [],
      blog: grouped.blog || []
    };
  }, [homeData]);

  if (loading || isLoading('home')) {
    return (
      <div className="w-full">
        <HeroSkeleton />
        <FeaturesSkeleton />
        <ServicesSkeleton />
        <PortfolioSkeleton />
        <GenericSectionSkeleton bgColor="bg-gray-50" itemCount={3} />
        <GenericSectionSkeleton bgColor="bg-blue-50" itemCount={3} />
        <GenericSectionSkeleton bgColor="bg-gray-900" itemCount={4} />
        <GenericSectionSkeleton bgColor="bg-white" itemCount={3} />
        <GenericSectionSkeleton bgColor="bg-gray-50" itemCount={3} />
        <GenericSectionSkeleton bgColor="bg-white" itemCount={3} />
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

  const { hero, features, services, portfolio, team, testimonials, stats, process, gallery, awards, partnerships, blog } = sectionData;

  // Don't render anything if data is not loaded yet
  if (!homeData || homeData.length === 0) {
    return (
      <div className="w-full">
        <HeroSkeleton />
        <FeaturesSkeleton />
        <ServicesSkeleton />
        <PortfolioSkeleton />
        <GenericSectionSkeleton bgColor="bg-gray-50" itemCount={3} />
        <GenericSectionSkeleton bgColor="bg-blue-50" itemCount={3} />
        <GenericSectionSkeleton bgColor="bg-gray-900" itemCount={4} />
        <GenericSectionSkeleton bgColor="bg-white" itemCount={3} />
        <GenericSectionSkeleton bgColor="bg-gray-50" itemCount={3} />
        <GenericSectionSkeleton bgColor="bg-white" itemCount={3} />
      </div>
    );
  }

  return (
    <div className="w-full">
      <Suspense fallback={<HeroSkeleton />}>
        <HeroSection hero={hero} />
      </Suspense>
      
      <LazySection
        fallback={<FeaturesSkeleton />}
        component={FeaturesSection}
        props={{ features }}
        threshold={0.1}
      />
      
      <LazySection
        fallback={<ServicesSkeleton />}
        component={ServicesSection}
        props={{ services }}
        threshold={0.1}
      />
      
      <LazySection
        fallback={<PortfolioSkeleton />}
        component={PortfolioSection}
        props={{ portfolio }}
        threshold={0.1}
      />
      
      <LazySection
        fallback={<GenericSectionSkeleton bgColor="bg-gray-50" itemCount={3} />}
        component={TeamSection}
        props={{ team }}
        threshold={0.1}
      />
      
      <LazySection
        fallback={<GenericSectionSkeleton bgColor="bg-blue-50" itemCount={3} />}
        component={TestimonialsSection}
        props={{ testimonials }}
        threshold={0.1}
      />
      
      <LazySection
        fallback={<GenericSectionSkeleton bgColor="bg-gray-900" itemCount={4} />}
        component={StatsSection}
        props={{ stats }}
        threshold={0.1}
      />
      
      <LazySection
        fallback={<GenericSectionSkeleton bgColor="bg-white" itemCount={3} />}
        component={AwardsSection}
        props={{ awards }}
        threshold={0.1}
      />
      
      <LazySection
        fallback={<GenericSectionSkeleton bgColor="bg-gray-50" itemCount={3} />}
        component={PartnershipsSection}
        props={{ partnerships }}
        threshold={0.1}
      />
      
      <LazySection
        fallback={<GenericSectionSkeleton bgColor="bg-white" itemCount={3} />}
        component={BlogSection}
        props={{ blog }}
        threshold={0.1}
      />
    </div>
  );
});

Home.displayName = 'Home';

export default Home;
