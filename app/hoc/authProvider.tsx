import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAuth } from '~/lib/auth';
import { Loading } from '~/components/elements/Loading';

interface AuthContextType {
  loading: boolean;
  role: 'admin' | 'member' | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { loading, role } = useAuth();

  if (loading) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider value={{ loading, role }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};

