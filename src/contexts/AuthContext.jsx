import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Mock user data - replace with real API calls
  const mockUsers = [
    {
      id: 1,
      email: 'user@example.com',
      password: 'password123',
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      bio: 'Passionate about technology and innovation. Always looking for ways to improve and grow.',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      website: 'https://johndoe.dev',
      role: 'user',
      joinDate: '2023-01-15',
      preferences: {
        theme: 'light',
        notifications: true,
        language: 'en',
        emailUpdates: true,
        pushNotifications: true,
        marketingEmails: false
      },
      services: [
        {
          id: 1,
          name: 'Web Development',
          status: 'active',
          startDate: '2024-01-15',
          endDate: '2024-06-15',
          progress: 75,
          rating: 4.5,
          review: 'Excellent service with great attention to detail.'
        },
        {
          id: 2,
          name: 'SEO Optimization',
          status: 'completed',
          startDate: '2023-12-01',
          endDate: '2024-01-31',
          progress: 100,
          rating: 5,
          review: 'Outstanding results! Website traffic increased by 200%.'
        },
        {
          id: 3,
          name: 'Mobile App Development',
          status: 'pending',
          startDate: '2024-03-01',
          endDate: '2024-08-01',
          progress: 0,
          rating: null,
          review: null
        }
      ]
    }
  ];

  useEffect(() => {
    // Check for stored authentication
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('authToken');
    
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
    
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      setLoading(true);
      
      // Mock authentication - replace with real API call
      const foundUser = mockUsers.find(
        u => u.email === email && u.password === password
      );
      
      if (foundUser) {
        const { password: _, ...userWithoutPassword } = foundUser;
        const mockToken = 'mock-jwt-token-' + Date.now();
        
        setUser(userWithoutPassword);
        setIsAuthenticated(true);
        
        // Store in localStorage
        localStorage.setItem('user', JSON.stringify(userWithoutPassword));
        localStorage.setItem('authToken', mockToken);
        
        return { success: true, user: userWithoutPassword };
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const logout = (onLogoutComplete) => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
    if (onLogoutComplete) {
      onLogoutComplete();
    }
  };

  const updateUser = (updatedData) => {
    const updatedUser = { 
      ...user, 
      ...updatedData,
      preferences: {
        ...user.preferences,
        ...updatedData.preferences
      }
    };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const updateService = (serviceId, updatedService) => {
    setUser(prevUser => ({
      ...prevUser,
      services: prevUser.services.map(service => 
        service.id === serviceId ? { ...service, ...updatedService } : service
      )
    }));
  };

  const addService = (newService) => {
    const service = {
      ...newService,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    setUser(prevUser => ({
      ...prevUser,
      services: [...prevUser.services, service]
    }));
  };

  const deleteService = (serviceId) => {
    setUser(prevUser => ({
      ...prevUser,
      services: prevUser.services.filter(service => service.id !== serviceId)
    }));
  };

  const value = {
    user,
    loading,
    isAuthenticated,
    login,
    logout,
    updateUser,
    updateService,
    addService,
    deleteService
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;