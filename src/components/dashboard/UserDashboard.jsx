import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import ServiceCard from './ServiceCard';
import ServiceModal from './ServiceModal';
import UserProfile from './UserProfile';
import ReviewModal from './ReviewModal';
import { 
  PlusIcon, 
  ChartBarIcon, 
  ClockIcon, 
  CheckCircleIcon,
  ExclamationTriangleIcon,
  StarIcon,
  CogIcon
} from '@heroicons/react/24/outline';

const UserDashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [reviewingService, setReviewingService] = useState(null);

  if (!user) return null;

  const { services = [] } = user;
  
  // Calculate statistics
  const stats = {
    total: services.length,
    active: services.filter(s => s.status === 'active').length,
    completed: services.filter(s => s.status === 'completed').length,
    pending: services.filter(s => s.status === 'pending').length,
    averageRating: services.filter(s => s.rating).reduce((acc, s) => acc + s.rating, 0) / services.filter(s => s.rating).length || 0
  };

  const handleEditService = (service) => {
    setSelectedService(service);
    setShowServiceModal(true);
  };

  const handleAddService = () => {
    setSelectedService(null);
    setShowServiceModal(true);
  };

  const handleReviewService = (service) => {
    setReviewingService(service);
    setIsReviewModalOpen(true);
  };

  const handleReviewSubmit = (updatedService) => {
    // Update service logic would go here
    setIsReviewModalOpen(false);
    setReviewingService(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-blue-600 bg-blue-100';
      case 'completed': return 'text-green-600 bg-green-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': return <ClockIcon className="h-5 w-5" />;
      case 'completed': return <CheckCircleIcon className="h-5 w-5" />;
      case 'pending': return <ExclamationTriangleIcon className="h-5 w-5" />;
      default: return <ClockIcon className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <img
                src={user.avatar}
                alt={user.name}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Welcome back, {user.name}!</h1>
                <p className="text-sm text-gray-500">Manage your services and track progress</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button
                 onClick={() => setIsProfileOpen(true)}
                 className="p-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                 title="Profile Settings"
               >
                 <CogIcon className="h-5 w-5" />
               </button>
              <button
                onClick={() => logout(() => navigate('/'))}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Services</p>
                <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
              </div>
              <ChartBarIcon className="h-8 w-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Services</p>
                <p className="text-3xl font-bold text-blue-600">{stats.active}</p>
              </div>
              <ClockIcon className="h-8 w-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-3xl font-bold text-green-600">{stats.completed}</p>
              </div>
              <CheckCircleIcon className="h-8 w-8 text-green-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Rating</p>
                <p className="text-3xl font-bold text-yellow-600">{stats.averageRating.toFixed(1)}</p>
              </div>
              <StarIcon className="h-8 w-8 text-yellow-600" />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', name: 'Overview', count: stats.total },
                { id: 'active', name: 'Active', count: stats.active },
                { id: 'completed', name: 'Completed', count: stats.completed },
                { id: 'pending', name: 'Pending', count: stats.pending }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.name}
                  {tab.count > 0 && (
                    <span className={`ml-2 py-0.5 px-2 rounded-full text-xs ${
                      activeTab === tab.id ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {tab.count}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Add Service Button */}
          <div className="p-6 border-b border-gray-200">
            <button
              onClick={handleAddService}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              <PlusIcon className="h-4 w-4 mr-2" />
              Add New Service
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services
            .filter(service => {
              if (activeTab === 'overview') return true;
              return service.status === activeTab;
            })
            .map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onEdit={() => handleEditService(service)}
                onReview={() => handleReviewService(service)}
                getStatusColor={getStatusColor}
                getStatusIcon={getStatusIcon}
              />
            ))}
        </div>

        {/* Empty State */}
        {services.filter(service => {
          if (activeTab === 'overview') return true;
          return service.status === activeTab;
        }).length === 0 && (
          <div className="text-center py-12">
            <ChartBarIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              No {activeTab === 'overview' ? '' : activeTab} services
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              {activeTab === 'overview' 
                ? 'Get started by adding your first service.'
                : `You don't have any ${activeTab} services yet.`
              }
            </p>
            <div className="mt-6">
              <button
                onClick={handleAddService}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                <PlusIcon className="h-4 w-4 mr-2" />
                Add Service
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      {showServiceModal && (
        <ServiceModal
          service={selectedService}
          onClose={() => {
            setShowServiceModal(false);
            setSelectedService(null);
          }}
        />
      )}

      {isProfileOpen && (
         <UserProfile
           onClose={() => setIsProfileOpen(false)}
        />
      )}

      {isReviewModalOpen && (
         <ReviewModal
           isOpen={isReviewModalOpen}
           service={reviewingService}
           onClose={() => {
             setIsReviewModalOpen(false);
             setReviewingService(null);
           }}
           onSubmit={handleReviewSubmit}
         />
       )}

       {isProfileOpen && (
         <UserProfile
           onClose={() => setIsProfileOpen(false)}
         />
       )}
    </div>
  );
};

export default UserDashboard;