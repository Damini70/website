import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { 
  XMarkIcon, 
  UserIcon, 
  CogIcon, 
  BellIcon,
  ShieldCheckIcon,
  PaintBrushIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const UserProfile = ({ onClose }) => {
  const { user, updateUser } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    avatar: user?.avatar || '',
    bio: user?.bio || '',
    phone: user?.phone || '',
    location: user?.location || '',
    website: user?.website || '',
    preferences: {
      theme: user?.preferences?.theme || 'light',
      notifications: user?.preferences?.notifications ?? true,
      language: user?.preferences?.language || 'en',
      emailUpdates: user?.preferences?.emailUpdates ?? true,
      pushNotifications: user?.preferences?.pushNotifications ?? true,
      marketingEmails: user?.preferences?.marketingEmails ?? false
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name.startsWith('preferences.')) {
      const prefKey = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        preferences: {
          ...prev.preferences,
          [prefKey]: type === 'checkbox' ? checked : value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      updateUser(formData);
      setSuccessMessage('Profile updated successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      console.error('Error updating profile:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const tabs = [
    { id: 'profile', name: 'Profile', icon: UserIcon },
    { id: 'preferences', name: 'Preferences', icon: CogIcon },
    { id: 'notifications', name: 'Notifications', icon: BellIcon },
    { id: 'security', name: 'Security', icon: ShieldCheckIcon }
  ];

  const themes = [
    { value: 'light', label: 'Light', description: 'Clean and bright interface' },
    { value: 'dark', label: 'Dark', description: 'Easy on the eyes' },
    { value: 'auto', label: 'Auto', description: 'Matches system preference' }
  ];

  const languages = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Español' },
    { value: 'fr', label: 'Français' },
    { value: 'de', label: 'Deutsch' },
    { value: 'it', label: 'Italiano' }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">User Profile</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="flex h-[calc(90vh-80px)]">
          {/* Sidebar */}
          <div className="w-64 bg-gray-50 border-r border-gray-200 p-4">
            <nav className="space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <Icon className="h-5 w-5 mr-3" />
                    {tab.name}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-6">
              {successMessage && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-600 text-sm">{successMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Profile Tab */}
                {activeTab === 'profile' && (
                  <div className="space-y-6">
                    <div className="flex items-center space-x-6">
                      <div className="relative">
                        <img
                          src={formData.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'}
                          alt="Profile"
                          className="h-20 w-20 rounded-full object-cover"
                        />
                        <button
                          type="button"
                          className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full p-1 hover:bg-blue-700 transition-colors"
                        >
                          <PaintBrushIcon className="h-4 w-4" />
                        </button>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">{formData.name}</h3>
                        <p className="text-sm text-gray-500">{formData.email}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Location
                        </label>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="City, Country"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Website
                        </label>
                        <input
                          type="url"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="https://yourwebsite.com"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Bio
                        </label>
                        <textarea
                          name="bio"
                          value={formData.bio}
                          onChange={handleChange}
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Tell us about yourself..."
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Preferences Tab */}
                {activeTab === 'preferences' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Appearance</h3>
                      <div className="space-y-3">
                        {themes.map((theme) => (
                          <label key={theme.value} className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name="preferences.theme"
                              value={theme.value}
                              checked={formData.preferences.theme === theme.value}
                              onChange={handleChange}
                              className="text-blue-600 focus:ring-blue-500"
                            />
                            <div>
                              <div className="font-medium text-gray-900">{theme.label}</div>
                              <div className="text-sm text-gray-500">{theme.description}</div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Language</h3>
                      <select
                        name="preferences.language"
                        value={formData.preferences.language}
                        onChange={handleChange}
                        className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        {languages.map((lang) => (
                          <option key={lang.value} value={lang.value}>{lang.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {/* Notifications Tab */}
                {activeTab === 'notifications' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Notification Preferences</h3>
                      <div className="space-y-4">
                        <label className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-gray-900">Push Notifications</div>
                            <div className="text-sm text-gray-500">Receive notifications in your browser</div>
                          </div>
                          <input
                            type="checkbox"
                            name="preferences.pushNotifications"
                            checked={formData.preferences.pushNotifications}
                            onChange={handleChange}
                            className="text-blue-600 focus:ring-blue-500 rounded"
                          />
                        </label>

                        <label className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-gray-900">Email Updates</div>
                            <div className="text-sm text-gray-500">Get notified about service updates via email</div>
                          </div>
                          <input
                            type="checkbox"
                            name="preferences.emailUpdates"
                            checked={formData.preferences.emailUpdates}
                            onChange={handleChange}
                            className="text-blue-600 focus:ring-blue-500 rounded"
                          />
                        </label>

                        <label className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-gray-900">Marketing Emails</div>
                            <div className="text-sm text-gray-500">Receive promotional content and offers</div>
                          </div>
                          <input
                            type="checkbox"
                            name="preferences.marketingEmails"
                            checked={formData.preferences.marketingEmails}
                            onChange={handleChange}
                            className="text-blue-600 focus:ring-blue-500 rounded"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Security Tab */}
                {activeTab === 'security' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Password & Security</h3>
                      <div className="space-y-4">
                        <button
                          type="button"
                          className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="font-medium text-gray-900">Change Password</div>
                          <div className="text-sm text-gray-500">Update your account password</div>
                        </button>

                        <button
                          type="button"
                          className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="font-medium text-gray-900">Two-Factor Authentication</div>
                          <div className="text-sm text-gray-500">Add an extra layer of security to your account</div>
                        </button>

                        <button
                          type="button"
                          className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="font-medium text-gray-900">Login History</div>
                          <div className="text-sm text-gray-500">View recent login activity</div>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <div className="flex justify-end pt-6 border-t border-gray-200">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Saving...
                      </div>
                    ) : (
                      'Save Changes'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;