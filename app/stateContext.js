'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context to share state
const StateContext = createContext();

// Provider component to wrap around the app
export const StateProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [balance, setBalance] = useState(null);
  const [budgets, setBudgets] = useState(null);
  const [pots, setPots] = useState(null);
  const [transactions, setTransactions] = useState(null);

  useEffect(() => {
    fetch('api/transactions')
      .then((res) => res.json())
      .then((data) => setTransactions(data))
      .catch((err) => console.error('Error fetching balance', err));
    fetch('api/balance')
      .then((res) => res.json())
      .then((data) => setBalance(data))
      .catch((err) => console.error('Error fetching balance', err));
    fetch('api/budgets')
      .then((res) => res.json())
      .then((data) => setBudgets(data))
      .catch((err) => console.error('Error fetching balance', err));
    fetch('api/pots')
      .then((res) => res.json())
      .then((data) => setPots(data))
      .catch((err) => console.error('Error fetching balance', err));
  }, []);

  return (
    <StateContext.Provider
      value={{
        sidebarOpen,
        setSidebarOpen,
        balance,
        setBalance,
        budgets,
        setBudgets,
        pots,
        setPots,
        transactions,
        setTransactions,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

// Custom hook to access the state in other components
export const useStateContext = () => useContext(StateContext);
