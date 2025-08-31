import { Suspense, lazy } from 'react';
import { NavbarSkeleton, FooterSkeleton } from './LoadingComponents.jsx';

// Lazy load Navbar and Footer for additional code splitting
const Navbar = lazy(() => import('./Navbar.jsx'));
const Footer = lazy(() => import('./Footer'));

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Header */}
      <header className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Suspense fallback={<NavbarSkeleton />}>
            <Navbar />
          </Suspense>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
      <Suspense fallback={<FooterSkeleton />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Layout;