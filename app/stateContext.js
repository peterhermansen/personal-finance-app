'use client';
import React, { createContext, useContext, useState } from 'react';

// Create a context to share state
const StateContext = createContext();

// Provider component to wrap around the app
export const StateProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Add more states here as needed

  return (
    <StateContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </StateContext.Provider>
  );
};

// Custom hook to access the state in other components
export const useStateContext = () => useContext(StateContext);
