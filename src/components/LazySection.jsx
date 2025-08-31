import React, { useState, useEffect, useRef, Suspense } from 'react';

const LazySection = ({ 
  component: Component, 
  props, 
  fallback, 
  threshold = 0.1, 
  sectionName, 
  loadSection 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          setHasLoaded(true);
          
          // Trigger data loading for this section if loadSection is provided
          if (loadSection && sectionName) {
            loadSection(sectionName);
          }
          
          // Disconnect observer after first load to prevent re-triggering
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: '100px' // Start loading 100px before the section comes into view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold, hasLoaded, loadSection, sectionName]);

  return (
    <div ref={sectionRef} className="min-h-[200px]">
      {isVisible ? (
        <Suspense fallback={fallback}>
          <Component {...props} />
        </Suspense>
      ) : (
        fallback
      )}
    </div>
  );
};

export default LazySection;