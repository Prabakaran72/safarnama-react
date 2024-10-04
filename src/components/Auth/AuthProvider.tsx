import React, { createContext,useState, useContext, useReducer, useEffect } from 'react';
import Cookies from 'js-cookie';
import apiHelper from '../../utils/apiHelper';
import {Reducers, InitialState} from './Reducers';

// Create a context for authentication
const AuthContext = createContext<any>(null);


// AuthProvider to wrap around the app
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(Reducers, InitialState);
  const [sessionCookie, setSessionCookie] =useState<string | null>(Cookies.get('connect.sid') || null);
  const api = apiHelper(state, dispatch);
  // const updateAuthState = () => {
  //   if (sessionCookie) {
  //     // Simulating fetching user data based on cookie
  //     dispatch({ type: 'LOGIN', payload: { name: 'John Doe', email: 'john@example.com' } });
  //   } else {
  //     dispatch({ type: 'LOGOUT' });
  //   }
  // };

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await api.get(`auth/check-session`);
        if (response?.isAuthenticated) {
          dispatch({ type: 'Auth/Login', payload: response?.user });
        } else {
          dispatch({ type: 'Auth/Logout' });
        }
      } catch (error) {
        console.error('Error checking session:', error);
        dispatch({ type: 'LOGOUT' });
      }
    };

    // Check session on mount
    checkSession();

  }, []);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access auth context
export const useAuth = () => {
  return useContext(AuthContext);
};
