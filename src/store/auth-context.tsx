import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/api';
import { getLoggedInUserData } from '../api/user.api';

interface UserObj {
  id: number;
  first_name: string;
  last_name: string;
}

interface AuthContextObj {
  user: UserObj | null;
  setSession: (authToken: string) => void;
}

export const AuthContext = React.createContext<AuthContextObj>({
  user: null,
  setSession: (authToken: string) => {}
});

const AuthContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [user, setUser] = useState<UserObj | null>(null);

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

  const contextValue = {
    user,
    setSession
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
