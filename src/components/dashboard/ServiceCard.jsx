import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { 
  PencilIcon, 
  TrashIcon, 
  StarIcon,
  CalendarIcon,
  ChartBarIcon,
  ChatBubbleLeftEllipsisIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';

const ServiceCard = ({ service, onEdit, onReview, getStatusColor, getStatusIcon }) => {
  const { deleteService } = useAuth();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      deleteService(service.id);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 50) return 'bg-blue-500';
    if (progress >= 25) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const renderStars = (rating) => {
    if (!rating) return <span className="text-gray-400 text-sm">No rating</span>;
    
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          star <= rating ? (
            <StarIconSolid key={star} className="h-4 w-4 text-yellow-400" />
          ) : (
            <StarIcon key={star} className="h-4 w-4 text-gray-300" />
          )
        ))}
        <span className="text-sm text-gray-600 ml-1">({rating})</span>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900 truncate">
            {service.name}
          </h3>
          <div className="flex items-center space-x-2 ml-2">
            <button
              onClick={onEdit}
              className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
              title="Edit service"
            >
              <PencilIcon className="h-4 w-4" />
            </button>
            <button
              onClick={() => onReview && onReview(service)}
              className="p-1 text-gray-400 hover:text-yellow-600 transition-colors"
              title="Write Review"
            >
              <ChatBubbleLeftEllipsisIcon className="h-4 w-4" />
            </button>
            <button
              onClick={handleDelete}
              className="p-1 text-gray-400 hover:text-red-600 transition-colors"
              title="Delete service"
            >
              <TrashIcon className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Status Badge */}
        <div className="flex items-center space-x-2 mb-4">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
            {getStatusIcon(service.status)}
            <span className="ml-1 capitalize">{service.status}</span>
          </span>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Progress</span>
            <span className="text-sm text-gray-600">{service.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(service.progress)}`}
              style={{ width: `${service.progress}%` }}
            ></div>
          </div>
        </div>

        {/* Dates */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <div className="flex items-center text-gray-500 mb-1">
              <CalendarIcon className="h-4 w-4 mr-1" />
              <span className="text-xs font-medium">Start Date</span>
            </div>
            <p className="text-sm text-gray-900">{formatDate(service.startDate)}</p>
          </div>
          <div>
            <div className="flex items-center text-gray-500 mb-1">
              <CalendarIcon className="h-4 w-4 mr-1" />
              <span className="text-xs font-medium">End Date</span>
            </div>
            <p className="text-sm text-gray-900">{formatDate(service.endDate)}</p>
          </div>
        </div>

        {/* Rating */}
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Rating</span>
            {renderStars(service.rating)}
          </div>
        </div>

        {/* Review */}
        {service.review && (
          <div className="bg-gray-50 rounded-lg p-3">
            <h4 className="text-sm font-medium text-gray-700 mb-1">Review</h4>
            <p className="text-sm text-gray-600 line-clamp-3">{service.review}</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-500">
            <ChartBarIcon className="h-4 w-4 mr-1" />
            <span className="text-xs">
              {service.status === 'completed' ? 'Completed' : 
               service.status === 'active' ? 'In Progress' : 'Not Started'}
            </span>
          </div>
          <button
            onClick={onEdit}
            className="text-xs text-blue-600 hover:text-blue-800 font-medium"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;