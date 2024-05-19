import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/api';
import { getLoggedInUserData } from '../api/user.api';
import User from '../models/User';

interface AuthContextObj {
  user: User | null;
  setSession: (authToken: string) => void;
  logoutUser: () => void;
}

export const AuthContext = React.createContext<AuthContextObj>({
  user: null,
  setSession: (authToken: string) => {},
  logoutUser: () => {}
});

const AuthContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const authToken = localStorage.getItem('token');
    if (authToken) {
      setSession(authToken);
    }
  }, []);

  const setSession = async (authToken: string) => {
    if (authToken) {
      localStorage.setItem('accessToken', authToken);
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${authToken}`;
      try {
        const response = await getLoggedInUserData();
        setUser(response.data.user);
      } catch (error: any) {
        console.error(error);
      }
    }
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('token');
    delete axiosInstance.defaults.headers.common.Authorization;
  };

  const contextValue = {
    user,
    setSession,
    logoutUser
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
