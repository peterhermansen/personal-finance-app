'use client';
import { StateProvider } from './stateContext';
import Sidebar from '@/components/Sidebar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/images/favicon-32x32.png" />
        <title>Personal Finance</title>
      </head>
      <body>
        <StateProvider>
          <div>
            <Sidebar />
            {children}
          </div>
        </StateProvider>
      </body>
    </html>
  );
}
