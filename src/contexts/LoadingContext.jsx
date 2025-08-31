import React, { createContext, useContext, useState, useCallback } from 'react';

// Create Loading Context
const LoadingContext = createContext();

// Custom hook to use loading context
export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

// Loading Provider Component
export const LoadingProvider = ({ children }) => {
  const [loadingStates, setLoadingStates] = useState({});
  const [globalLoading, setGlobalLoading] = useState(false);

  // Set loading state for a specific key
  const setLoading = useCallback((key, isLoading) => {
    setLoadingStates(prev => ({
      ...prev,
      [key]: isLoading
    }));
  }, []);

  // Get loading state for a specific key
  const isLoading = useCallback((key) => {
    return loadingStates[key] || false;
  }, [loadingStates]);

  // Check if any loading state is active
  const isAnyLoading = useCallback(() => {
    return Object.values(loadingStates).some(loading => loading) || globalLoading;
  }, [loadingStates, globalLoading]);

  // Set global loading state
  const setGlobalLoadingState = useCallback((isLoading) => {
    setGlobalLoading(isLoading);
  }, []);

  // Clear all loading states
  const clearAllLoading = useCallback(() => {
    setLoadingStates({});
    setGlobalLoading(false);
  }, []);

  const value = {
    setLoading,
    isLoading,
    isAnyLoading,
    setGlobalLoadingState,
    clearAllLoading,
    globalLoading,
    loadingStates
  };

  return (
    <LoadingContext.Provider value={value}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingContext;