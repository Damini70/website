import { useState, useEffect, useCallback, useMemo } from 'react';
import { useLoading } from '../contexts/LoadingContext';

// Generic data fetching hook with loading states
export const useDataFetching = (dataLoader, loadingKey, delay = 800) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { setLoading, isLoading } = useLoading();

  const memoizedDataLoader = useCallback(dataLoader, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(loadingKey, true);
        setError(null);
        
        // Add 100ms delay to trigger Suspense fallback UI
        await new Promise(resolve => setTimeout(resolve, 100));
        
        const result = await memoizedDataLoader();
        setData(result);
      } catch (err) {
        setError(err.message || 'Failed to load data');
        console.error(`Error loading ${loadingKey}:`, err);
      } finally {
        setLoading(loadingKey, false);
      }
    };

    fetchData();
  }, [memoizedDataLoader, loadingKey, setLoading]);

  return {
    data,
    error,
    isLoading: isLoading(loadingKey),
    refetch: () => {
      setData(null);
      setError(null);
    }
  };
};

// Specific hooks for each data type
export const useHomeData = () => {
  return useDataFetching(
    () => import('../utils/home.js').then(module => module.homeData),
    'homeData',
    600
  );
};

// Chunked home data loading for better performance
export const useChunkedHomeData = () => {
  const [chunks, setChunks] = useState({
    hero: null,
    features: [],
    services: [],
    portfolio: [],
    team: [],
    testimonials: [],
    stats: [],
    awards: [],
    partnerships: [],
    blog: []
  });
  const [loadedSections, setLoadedSections] = useState(new Set());
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadSection = useCallback(async (sectionName) => {
    if (loadedSections.has(sectionName)) return;
    
    try {
      setIsLoading(true);
      const { homeData } = await import('../utils/home.js');
      
      // Filter data for the specific section
      const sectionData = homeData.filter(item => {
        if (sectionName === 'features') return item.section === 'feature';
        if (sectionName === 'services') return item.section === 'service';
        if (sectionName === 'testimonials') return item.section === 'testimonial';
        if (sectionName === 'awards') return item.section === 'award';
        if (sectionName === 'partnerships') return item.section === 'partnership';
        return item.section === sectionName;
      });
      
      setChunks(prev => ({
        ...prev,
        [sectionName]: sectionName === 'hero' ? sectionData[0] : sectionData
      }));
      
      setLoadedSections(prev => new Set([...prev, sectionName]));
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [loadedSections]);

  // Load hero section immediately
  useEffect(() => {
    loadSection('hero');
  }, [loadSection]);

  return {
    chunks,
    loadSection,
    loadedSections,
    isLoading,
    error
  };
};

export const useAboutData = () => {
  return useDataFetching(
    () => import('../utils/about.js').then(module => module.aboutData),
    'aboutData',
    700
  );
};

export const useServicesData = () => {
  return useDataFetching(
    () => import('../utils/Service.js').then(module => module.servicesData),
    'servicesData',
    800
  );
};

export const useContactData = () => {
  return useDataFetching(
    () => import('../utils/contact.js').then(module => module.contactData),
    'contactData',
    650
  );
};

// Hook for loading multiple data sources
export const useMultipleData = (dataHooks) => {
  const results = useMemo(() => {
    return dataHooks.map(hook => hook());
  }, [dataHooks]);
  
  const processedResults = useMemo(() => {
    const isLoading = results.some(result => result.isLoading);
    const hasError = results.some(result => result.error);
    const allData = results.map(result => result.data);
    const errors = results.map(result => result.error).filter(Boolean);
    
    return {
      data: allData,
      isLoading,
      hasError,
      errors
    };
  }, [results]);
  
  return processedResults;
};