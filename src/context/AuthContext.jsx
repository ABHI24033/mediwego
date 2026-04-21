import React from 'react';
import { getCurrentAdmin, loginAdmin, logoutAdmin, refreshSession, clearStoredAccessToken } from '../services/api';

const AuthContext = React.createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);
  const [isInitializing, setIsInitializing] = React.useState(true);

  const clearSession = React.useCallback(() => {
    clearStoredAccessToken();
    setUser(null);
  }, []);

  const bootstrapSession = React.useCallback(async () => {
    try {
      const currentAdmin = await getCurrentAdmin();
      setUser(currentAdmin.data);
    } catch (error) {
      try {
        const refreshed = await refreshSession();
        setUser(refreshed.admin);
      } catch (refreshError) {
        clearSession();
      }
    } finally {
      setIsInitializing(false);
    }
  }, [clearSession]);

  React.useEffect(() => {
    bootstrapSession();
  }, [bootstrapSession]);

  const handleLogin = React.useCallback(async (credentials) => {
    const response = await loginAdmin(credentials);
    setUser(response.admin);
    return response;
  }, []);

  const handleLogout = React.useCallback(async () => {
    try {
      await logoutAdmin();
    } finally {
      clearSession();
    }
  }, [clearSession]);

  const value = React.useMemo(() => ({
    user,
    isAuthenticated: Boolean(user),
    isInitializing,
    login: handleLogin,
    logout: handleLogout,
    refreshAuth: bootstrapSession,
  }), [user, isInitializing, handleLogin, handleLogout, bootstrapSession]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
