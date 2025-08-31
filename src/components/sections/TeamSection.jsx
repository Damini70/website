import React, { useMemo } from 'react';
import OptimizedImage from '../OptimizedImage';

// Team Section Component
const TeamSection = React.memo(({ team }) => {
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

TeamSection.displayName = 'TeamSection';
TeamCard.displayName = 'TeamCard';

export default TeamSection;