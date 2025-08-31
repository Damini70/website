
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './components/Layout.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import { LoadingProvider } from './contexts/LoadingContext.jsx';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import SuspenseFallback from './components/SuspenseFallback.jsx';
import Login from './components/auth/Login';
import UserDashboard from './components/dashboard/UserDashboard';
import './App.css'

// Lazy load components for code splitting
const Home = lazy(() => import('./components/OptimizedHome.jsx'));
const About = lazy(() => import('./components/About.jsx'));
const Service = lazy(() => import('./components/Service.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));

const AppContent = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Layout>
      <Suspense fallback={<SuspenseFallback type="default" />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <LoadingProvider>
          <Router>
            <AppContent />
          </Router>
        </LoadingProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App
