import React, { useState, useEffect } from 'react';
import { XMarkIcon, StarIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';

const ReviewModal = ({ isOpen, onClose, service, onSubmit }) => {
  const [formData, setFormData] = useState({
    rating: 0,
    title: '',
    review: '',
    pros: '',
    cons: '',
    wouldRecommend: true,
    serviceQuality: 5,
    communication: 5,
    timeliness: 5,
    value: 5
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredRating, setHoveredRating] = useState(0);

  useEffect(() => {
    if (service && service.review) {
      setFormData({
        rating: service.rating || 0,
        title: service.review.title || '',
        review: service.review.content || '',
        pros: service.review.pros || '',
        cons: service.review.cons || '',
        wouldRecommend: service.review.wouldRecommend ?? true,
        serviceQuality: service.review.serviceQuality || 5,
        communication: service.review.communication || 5,
        timeliness: service.review.timeliness || 5,
        value: service.review.value || 5
      });
    } else {
      setFormData({
        rating: 0,
        title: '',
        review: '',
        pros: '',
        cons: '',
        wouldRecommend: true,
        serviceQuality: 5,
        communication: 5,
        timeliness: 5,
        value: 5
      });
    }
  }, [service]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'number' ? parseInt(value) : value
    }));
  };

  const handleRatingChange = (rating) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.rating === 0) {
      alert('Please provide a rating');
      return;
    }
    if (!formData.review.trim()) {
      alert('Please write a review');
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmit({
        ...service,
        rating: formData.rating,
        review: {
          title: formData.title,
          content: formData.review,
          pros: formData.pros,
          cons: formData.cons,
          wouldRecommend: formData.wouldRecommend,
          serviceQuality: formData.serviceQuality,
          communication: formData.communication,
          timeliness: formData.timeliness,
          value: formData.value,
          date: new Date().toISOString()
        }
      });
      onClose();
    } catch (error) {
      console.error('Error submitting review:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStars = (rating, onRate, size = 'h-6 w-6') => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => {
          const isFilled = star <= (hoveredRating || rating);
          return (
            <button
              key={star}
              type="button"
              onClick={() => onRate && onRate(star)}
              onMouseEnter={() => onRate && setHoveredRating(star)}
              onMouseLeave={() => onRate && setHoveredRating(0)}
              className={`${onRate ? 'cursor-pointer hover:scale-110' : 'cursor-default'} transition-all`}
            >
              {isFilled ? (
                <StarIconSolid className={`${size} text-yellow-400`} />
              ) : (
                <StarIcon className={`${size} text-gray-300`} />
              )}
            </button>
          );
        })}
      </div>
    );
  };

  const renderRatingSlider = (label, name, value) => (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <span className="text-sm text-gray-500">{value}/5</span>
      </div>
      <input
        type="range"
        name={name}
        min="1"
        max="5"
        value={value}
        onChange={handleChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
      />
      <div className="flex justify-between text-xs text-gray-400">
        <span>Poor</span>
        <span>Excellent</span>
      </div>
    </div>
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-white">
                {service?.review ? 'Edit Review' : 'Write a Review'}
              </h2>
              <p className="text-yellow-100 text-sm">{service?.name}</p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-yellow-200 transition-colors"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Overall Rating */}
            <div className="text-center">
              <label className="block text-lg font-medium text-gray-900 mb-3">
                Overall Rating
              </label>
              {renderStars(formData.rating, handleRatingChange, 'h-8 w-8')}
              <p className="text-sm text-gray-500 mt-2">
                {formData.rating === 0 && 'Click to rate'}
                {formData.rating === 1 && 'Poor'}
                {formData.rating === 2 && 'Fair'}
                {formData.rating === 3 && 'Good'}
                {formData.rating === 4 && 'Very Good'}
                {formData.rating === 5 && 'Excellent'}
              </p>
            </div>

            {/* Review Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Review Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Summarize your experience"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Review Content */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Review *
              </label>
              <textarea
                name="review"
                value={formData.review}
                onChange={handleChange}
                rows={4}
                placeholder="Share your experience with this service..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                required
              />
            </div>

            {/* Pros and Cons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What did you like?
                </label>
                <textarea
                  name="pros"
                  value={formData.pros}
                  onChange={handleChange}
                  rows={3}
                  placeholder="List the positives..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What could be improved?
                </label>
                <textarea
                  name="cons"
                  value={formData.cons}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Areas for improvement..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Detailed Ratings */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Detailed Ratings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {renderRatingSlider('Service Quality', 'serviceQuality', formData.serviceQuality)}
                {renderRatingSlider('Communication', 'communication', formData.communication)}
                {renderRatingSlider('Timeliness', 'timeliness', formData.timeliness)}
                {renderRatingSlider('Value for Money', 'value', formData.value)}
              </div>
            </div>

            {/* Recommendation */}
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="wouldRecommend"
                checked={formData.wouldRecommend}
                onChange={handleChange}
                className="text-yellow-600 focus:ring-yellow-500 rounded"
              />
              <label className="text-sm font-medium text-gray-700">
                I would recommend this service to others
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting || formData.rating === 0}
                className="px-6 py-2 text-sm font-medium text-white bg-yellow-600 rounded-lg hover:bg-yellow-700 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </div>
                ) : (
                  service?.review ? 'Update Review' : 'Submit Review'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #d97706;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #d97706;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default ReviewModal;