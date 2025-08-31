// Preloader utility for optimizing chunk loading

/**
 * Preload critical components to improve performance
 * This function dynamically imports components without rendering them
 */
export const preloadCriticalComponents = () => {
  // Preload components that are likely to be needed soon
  const preloadPromises = [
    // Preload hero section immediately as it's above the fold
    import('../components/sections/HeroSection'),
    
    // Preload features section as it's typically the second section
    import('../components/sections/FeaturesSection'),
    
    // Preload services section for quick navigation
    import('../components/sections/ServicesSection')
  ];
  
  return Promise.allSettled(preloadPromises);
};

/**
 * Preload components based on user interaction hints
 * @param {string} sectionName - Name of the section to preload
 */
export const preloadSection = (sectionName) => {
  const sectionMap = {
    hero: () => import('../components/sections/HeroSection'),
    features: () => import('../components/sections/FeaturesSection'),
    services: () => import('../components/sections/ServicesSection'),
    portfolio: () => import('../components/sections/PortfolioSection'),
    blog: () => import('../components/sections/BlogSection'),
    team: () => import('../components/sections/TeamSection')
  };
  
  const preloader = sectionMap[sectionName];
  if (preloader) {
    return preloader();
  }
  
  console.warn(`Section '${sectionName}' not found in preloader map`);
  return Promise.resolve();
};

/**
 * Preload components on mouse hover for instant loading
 * @param {string} sectionName - Name of the section to preload
 */
export const preloadOnHover = (sectionName) => {
  // Add a small delay to avoid unnecessary preloading on quick hovers
  return new Promise((resolve) => {
    setTimeout(() => {
      preloadSection(sectionName).then(resolve);
    }, 100);
  });
};

/**
 * Preload components based on viewport proximity
 * @param {string} sectionName - Name of the section to preload
 * @param {number} threshold - Distance threshold for preloading (default: 200px)
 */
export const preloadOnProximity = (sectionName, threshold = 200) => {
  return new Promise((resolve) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.boundingClientRect.top < threshold) {
            preloadSection(sectionName).then(resolve);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: `${threshold}px`
      }
    );
    
    // Find the target element (this would need to be called with a specific element)
    const targetElement = document.querySelector(`[data-section="${sectionName}"]`);
    if (targetElement) {
      observer.observe(targetElement);
    } else {
      // Fallback: preload immediately if element not found
      preloadSection(sectionName).then(resolve);
    }
  });
};

/**
 * Initialize preloading strategy
 */
export const initializePreloading = () => {
  // Preload critical components on page load
  if (typeof window !== 'undefined') {
    // Use requestIdleCallback if available, otherwise use setTimeout
    const schedulePreload = window.requestIdleCallback || 
      ((callback) => setTimeout(callback, 1));
    
    schedulePreload(() => {
      preloadCriticalComponents();
    });
  }
};