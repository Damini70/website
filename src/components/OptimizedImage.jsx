import React from 'react';

// Optimized Image component with lazy loading and error handling
const OptimizedImage = React.memo(({ src, alt, className, ...props }) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [imageError, setImageError] = React.useState(false);

  const handleLoad = React.useCallback(() => {
    setImageLoaded(true);
  }, []);

  const handleError = React.useCallback(() => {
    setImageError(true);
  }, []);

  if (imageError) {
    return (
      <div className={`${className} bg-gray-200 flex items-center justify-center`}>
        <span className="text-gray-400">Image unavailable</span>
      </div>
    );
  }

  return (
    <>
      {!imageLoaded && (
        <div className={`${className} bg-gray-200 animate-pulse`}></div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        loading="lazy"
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;