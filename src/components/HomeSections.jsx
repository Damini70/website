import React, { useMemo } from 'react';
import OptimizedImage from './OptimizedImage';
import VirtualizedList from './VirtualizedList';

// Hero Section Component
export const HeroSection = React.memo(({ hero }) => {
  if (!hero) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {hero.title}
        </h1>
        <p className="text-xl sm:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
          {hero.description}
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

// Team Section Component
export const TeamSection = React.memo(({ team }) => {
  if (!team || team.length === 0) return null;

  const memoizedTeam = useMemo(() => {
    return team.map((member) => (
      <TeamCard key={member.id} member={member} />
    ));
  }, [team]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the talented professionals behind our success
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memoizedTeam}
        </div>
      </div>
    </section>
  );
});

// Team Card Component
const TeamCard = React.memo(({ member }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6 text-center">
        <div className="mb-4">
          <OptimizedImage
            src={member.image}
            alt={member.name}
            className="w-24 h-24 rounded-full mx-auto object-cover"
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
        <p className="text-blue-600 font-medium mb-3">{member.role}</p>
        <p className="text-gray-600 text-sm mb-4">{member.description}</p>
        {member.social && (
          <div className="flex justify-center space-x-3">
            {Object.entries(member.social).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{platform}</span>
                <div className="w-5 h-5 bg-gray-300 rounded"></div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
});

// Testimonials Section Component
export const TestimonialsSection = React.memo(({ testimonials }) => {
  if (!testimonials || testimonials.length === 0) return null;

  const memoizedTestimonials = useMemo(() => {
    return testimonials.map((testimonial) => (
      <TestimonialCard key={testimonial.id} testimonial={testimonial} />
    ));
  }, [testimonials]);

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memoizedTestimonials}
        </div>
      </div>
    </section>
  );
});

// Testimonial Card Component
const TestimonialCard = React.memo(({ testimonial }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <OptimizedImage
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.role}</p>
          {testimonial.company && (
            <p className="text-xs text-blue-600">{testimonial.company}</p>
          )}
        </div>
      </div>
      <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
      {testimonial.rating && (
        <div className="flex">
          {[...Array(testimonial.rating)].map((_, i) => (
            <span key={i} className="text-yellow-400">★</span>
          ))}
        </div>
      )}
    </div>
  );
});

// Stats Section Component
export const StatsSection = React.memo(({ stats }) => {
  if (!stats || stats.length === 0) return null;

  const memoizedStats = useMemo(() => {
    return stats.map((stat) => (
      <StatCard key={stat.id} stat={stat} />
    ));
  }, [stats]);

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Impact in Numbers</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See the measurable results we've achieved for our clients
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {memoizedStats}
        </div>
      </div>
    </section>
  );
});

// Stat Card Component
const StatCard = React.memo(({ stat }) => {
  return (
    <div className="text-center">
      <div className="text-4xl mb-2">{stat.icon}</div>
      <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
      <div className="text-gray-300">{stat.label}</div>
    </div>
  );
});

// Awards Section Component
export const AwardsSection = React.memo(({ awards }) => {
  if (!awards || awards.length === 0) return null;

  const memoizedAwards = useMemo(() => {
    return awards.map((award) => (
      <AwardCard key={award.id} award={award} />
    ));
  }, [awards]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence has been recognized by industry leaders
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memoizedAwards}
        </div>
      </div>
    </section>
  );
});

// Award Card Component
const AwardCard = React.memo(({ award }) => {
  return (
    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-yellow-200">
      <div className="text-center">
        <OptimizedImage
          src={award.image}
          alt={award.title}
          className="w-16 h-16 mx-auto mb-4 rounded-lg object-cover"
        />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{award.title}</h3>
        <p className="text-blue-600 font-medium mb-2">{award.organization}</p>
        <p className="text-sm text-gray-500 mb-3">{award.year}</p>
        <p className="text-gray-700 text-sm">{award.description}</p>
      </div>
    </div>
  );
});

// Partnerships Section Component
export const PartnershipsSection = React.memo(({ partnerships }) => {
  if (!partnerships || partnerships.length === 0) return null;

  const memoizedPartnerships = useMemo(() => {
    return partnerships.map((partnership) => (
      <PartnershipCard key={partnership.id} partnership={partnership} />
    ));
  }, [partnerships]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with industry leaders to deliver exceptional solutions
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memoizedPartnerships}
        </div>
      </div>
    </section>
  );
});

// Partnership Card Component
const PartnershipCard = React.memo(({ partnership }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 text-center">
      <OptimizedImage
        src={partnership.logo}
        alt={partnership.name}
        className="w-20 h-20 mx-auto mb-4 object-contain"
      />
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{partnership.name}</h3>
      <p className="text-blue-600 font-medium mb-3">{partnership.type}</p>
      <p className="text-gray-600 text-sm">{partnership.description}</p>
    </div>
  );
});

// Blog Section Component
export const BlogSection = React.memo(({ blog }) => {
  if (!blog || blog.length === 0) return null;

  const memoizedBlog = useMemo(() => {
    return blog.map((post) => (
      <BlogCard key={post.id} post={post} />
    ));
  }, [blog]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest thoughts on technology and innovation
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memoizedBlog}
        </div>
      </div>
    </section>
  );
});

// Blog Card Component
const BlogCard = React.memo(({ post }) => {
  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <OptimizedImage
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium mr-3">
            {post.category}
          </span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            <span>By {post.author}</span>
            <span className="mx-2">•</span>
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
            Read More →
          </button>
        </div>
      </div>
    </article>
  );
});

// Features Section Component
export const FeaturesSection = React.memo(({ features }) => {
  if (!features || features.length === 0) return null;

  const memoizedFeatures = useMemo(() => {
    return features.map((feature) => (
      <FeatureCard key={feature.id} feature={feature} />
    ));
  }, [features]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the powerful features that make our platform the perfect choice for your business
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
  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
    <div className="text-4xl mb-4">{feature.icon}</div>
    <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
    <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
    <OptimizedImage
      src={feature.image}
      alt={feature.title}
      className="w-full h-48 object-cover rounded-lg"
    />
  </div>
));

// Services Section Component
export const ServicesSection = React.memo(({ services }) => {
  if (!services || services.length === 0) return null;

  const memoizedServices = useMemo(() => {
    return services.map((service) => (
      <ServiceCard key={service.id} service={service} />
    ));
  }, [services]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions tailored to meet your unique business needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memoizedServices}
        </div>
      </div>
    </section>
  );
});

// Individual Service Card Component
const ServiceCard = React.memo(({ service }) => (
  <div className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300">
    <div className="text-4xl mb-4">{service.icon}</div>
    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
    <div className="text-blue-600 font-semibold">{service.price}</div>
  </div>
));

// Portfolio Section Component
export const PortfolioSection = React.memo(({ portfolio }) => {
  if (!portfolio || portfolio.length === 0) return null;

  const renderPortfolioItem = useMemo(() => {
    return (project, index) => (
      <div className="px-4 pb-8">
        <PortfolioCard project={project} />
      </div>
    );
  }, []);

  const memoizedPortfolio = useMemo(() => {
    return portfolio.map((project) => (
      <PortfolioCard key={project.id} project={project} />
    ));
  }, [portfolio]);

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing our best work and successful projects
          </p>
        </div>
        {portfolio.length > 6 ? (
          <VirtualizedList
            items={portfolio}
            itemHeight={320}
            containerHeight={800}
            renderItem={renderPortfolioItem}
            className="mx-auto"
            overscan={2}
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
const PortfolioCard = React.memo(({ project }) => {
  const memoizedTechnologies = useMemo(() => {
    return project.technologies?.map((tech, index) => (
      <span key={index} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
        {tech}
      </span>
    )) || [];
  }, [project.technologies]);

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
      <OptimizedImage
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {memoizedTechnologies}
        </div>
      </div>
    </div>
  );
});

// Set display names for better debugging
HeroSection.displayName = 'HeroSection';
FeaturesSection.displayName = 'FeaturesSection';
ServicesSection.displayName = 'ServicesSection';
PortfolioSection.displayName = 'PortfolioSection';
FeatureCard.displayName = 'FeatureCard';
ServiceCard.displayName = 'ServiceCard';
PortfolioCard.displayName = 'PortfolioCard';