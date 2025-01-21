'use client';
import { StateProvider } from './stateContext';
import { useState, useEffect } from 'react';
import Sidebar from '@/components/nav/Sidebar';
import BottomNav from '@/components/nav/BottomNav';

export default function RootLayout({ children }) {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial size
    handleResize();

    // Listen to window resize events
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/images/favicon-32x32.png" />
        <title>Personal Finance</title>
      </head>
      <body>
        <StateProvider>
          <div>
            {windowSize.width > 1200 ? <Sidebar /> : <BottomNav />}
            {children}
          </div>
        </StateProvider>
      </body>
    </html>
  );
}
