import React, { useState, useEffect, useCallback } from 'react';
import axiosInstance from '../api/api';
import { getLoggedInUserData } from '../api/user.api';
import User from '../models/User';

interface AuthContextObj {
  initializingUser: boolean;
  user: User | null;
  setSession: (authToken: string) => void;
  logoutUser: () => void;
}

export const AuthContext = React.createContext<AuthContextObj>({
  initializingUser: true,
  user: null,
  setSession: () => {},
  logoutUser: () => {}
});

const AuthContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const setSession = useCallback(async (authToken: string) => {
    localStorage.setItem('token', authToken);
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${authToken}`;
    setLoading(true);
    try {
      const response = await getLoggedInUserData();
      setUser(response.data.user);
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const authToken = localStorage.getItem('token');
    if (authToken) {
      setSession(authToken);
    } else {
      setLoading(false);
    }
  }, [setSession]);

  const logoutUser = useCallback(() => {
    setUser(null);
    localStorage.removeItem('token');
    delete axiosInstance.defaults.headers.common.Authorization;
  }, []);

  const contextValue = {
    initializingUser: loading,
    user,
    setSession,
    logoutUser
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
