import React, { createContext,useState, useContext, useReducer, useEffect } from 'react';
import Cookies from 'js-cookie';
import apiHelper from '../../utils/apiHelper';
// Create a context for authentication
const AuthContext = createContext<any>(null);

const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload, isAuthenticated: true };
    case 'LOGOUT':
      return { ...state, user: null, isAuthenticated: false };
    default:
      return state;
  }
};

// Initial state for auth
const initialState = {
  user: null,
  isAuthenticated: false,
};

// AuthProvider to wrap around the app
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [sessionCookie, setSessionCookie] =useState<string | null>(Cookies.get('connect.sid') || null);

  const updateAuthState = () => {
    if (sessionCookie) {
      // Simulating fetching user data based on cookie
      dispatch({ type: 'LOGIN', payload: { name: 'John Doe', email: 'john@example.com' } });
    } else {
      dispatch({ type: 'LOGOUT' });
    }
  };

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await apiHelper.get(`auth/check-session`);
        console.log("** response - " , response);
        if (response?.isAuthenticated) {
          dispatch({ type: 'LOGIN', payload: response?.user });
        } else {
          dispatch({ type: 'LOGOUT' });
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
