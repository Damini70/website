import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';
import { UserIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user } = useAuth();

  return (
    <nav className="bg-gray-900 text-white px-6 py-3 shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold">MyWebsite</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 text-lg">
            <li>
              <Link to="/" className="hover:text-gray-400 transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-400 transition-colors duration-200">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gray-400 transition-colors duration-200">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-400 transition-colors duration-200">
                Contact
              </Link>
            </li>
          </ul>
          
          {/* Auth Section */}
          {isAuthenticated ? (
            <Link
              to="/dashboard"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <UserIcon className="h-4 w-4" />
              <span className="text-sm font-medium">{user?.name}</span>
            </Link>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-1 bg-white"></span>
          <span className="w-6 h-1 bg-white"></span>
          <span className="w-6 h-1 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-3">
          <ul className="space-y-3">
            <li>
              <Link to="/" className="block hover:text-gray-400 transition-colors duration-200" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="block hover:text-gray-400 transition-colors duration-200" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="block hover:text-gray-400 transition-colors duration-200" onClick={() => setIsOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block hover:text-gray-400 transition-colors duration-200" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
          
          {/* Mobile Auth Section */}
          <div className="pt-3 border-t border-gray-700">
            {isAuthenticated ? (
              <Link
                to="/dashboard"
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <UserIcon className="h-4 w-4" />
                <span className="text-sm font-medium">{user?.name}</span>
              </Link>
            ) : (
              <Link
                to="/login"
                className="block px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
