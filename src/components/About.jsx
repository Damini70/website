import React, { useMemo } from 'react';
import { useAboutData } from '../hooks/useDataFetching';
import { useLoading } from '../contexts/LoadingContext';
import { OptimizedImage } from './OptimizedImage';
import { HeroSkeleton, GenericSectionSkeleton } from './SectionSkeletons';

const About = () => {
  const { data: aboutData, loading, error } = useAboutData();
  const { isLoading } = useLoading();

  if (loading || isLoading('about')) {
    return (
      <div className="w-full">
        <HeroSkeleton />
        <GenericSectionSkeleton bgColor="bg-white" itemCount={2} />
        <GenericSectionSkeleton bgColor="bg-gray-50" itemCount={3} />
        <GenericSectionSkeleton bgColor="bg-blue-50" itemCount={4} />
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

  const sectionData = useMemo(() => {
    if (!aboutData) return {};
    
    return {
      intro: aboutData.find(item => item.section === 'intro'),
      mission: aboutData.find(item => item.section === 'mission'),
      vision: aboutData.find(item => item.section === 'vision'),
      team: aboutData.find(item => item.section === 'team')
    };
  }, [aboutData]);

  const { intro: introSection, mission: missionSection, vision: visionSection, team: teamSection } = sectionData;

  return (
    <div className="space-y-16 pb-10">
      {/* Hero Section */}
      {introSection && (
        <section className="text-center">
          <div className="relative overflow-hidden text-white">
            <img 
              src={introSection.image} 
              alt={introSection.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative px-8 py-16 md:py-24">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {introSection.title}
              </h1>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
                {introSection.description}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Mission & Vision Grid */}
      <section className="grid md:grid-cols-2 gap-8">
        {/* Mission */}
        {missionSection && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img 
              src={missionSection.image} 
              alt={missionSection.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {missionSection.title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {missionSection.description}
              </p>
            </div>
          </div>
        )}

        {/* Vision */}
        {visionSection && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img 
              src={visionSection.image} 
              alt={visionSection.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {visionSection.title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {visionSection.description}
              </p>
            </div>
          </div>
        )}
      </section>

      {/* Team Section */}
      {teamSection && (
        <section>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            {teamSection.title}
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              {teamSection.description}
            </p>
            
            {/* Team Members Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="relative mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80" 
                    alt="John Doe"
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">John Doe</h3>
                <p className="text-blue-600 font-medium mb-3">CEO & Founder</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Visionary leader with 15+ years of experience in technology and business development.
                </p>
              </div>

              {/* Team Member 2 */}
              <div className="text-center">
                <div className="relative mb-6">
                  <img 
                     src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80" 
                     alt="Jane Smith"
                     className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                     loading="lazy"
                   />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Jane Smith</h3>
                <p className="text-blue-600 font-medium mb-3">CTO</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Technical expert specializing in scalable solutions and innovative software architecture.
                </p>
              </div>

              {/* Team Member 3 */}
              <div className="text-center">
                <div className="relative mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80" 
                    alt="Mike Brown"
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Mike Brown</h3>
                <p className="text-blue-600 font-medium mb-3">Lead Developer</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Full-stack developer passionate about creating efficient and user-friendly applications.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Values Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Innovation */}
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Innovation</h3>
            <p className="text-gray-600">We constantly push boundaries to deliver cutting-edge solutions.</p>
          </div>

          {/* Quality */}
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality</h3>
            <p className="text-gray-600">Excellence in every detail, ensuring the highest standards.</p>
          </div>

          {/* Collaboration */}
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Collaboration</h3>
            <p className="text-gray-600">Working together to achieve extraordinary results.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;