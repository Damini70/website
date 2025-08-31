import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// Bundle analyzer configuration for Vite
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: 'dist/bundle-analysis.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
      template: 'treemap' // Options: 'treemap', 'sunburst', 'network'
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          
          // Section chunks for better code splitting
          'hero-section': ['./src/components/sections/HeroSection.jsx'],
          'features-section': ['./src/components/sections/FeaturesSection.jsx'],
          'services-section': ['./src/components/sections/ServicesSection.jsx'],
          'portfolio-section': ['./src/components/sections/PortfolioSection.jsx'],
          'blog-section': ['./src/components/sections/BlogSection.jsx'],
          'team-section': ['./src/components/sections/TeamSection.jsx'],
          
          // Utility chunks
          utils: ['./src/utils/home.js', './src/hooks/useDataFetching.js']
        }
      }
    },
    // Enable source maps for better debugging
    sourcemap: true,
    
    // Optimize chunk size warnings
    chunkSizeWarningLimit: 1000
  },
  
  // Performance optimizations
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
});