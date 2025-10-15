import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import AppNavbar from './AppNavbar';
import Footer from './Footer';
import SplashScreen from './SplashScreen'; // 👈 Import the SplashScreen

function Layout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide the splash screen after 3 seconds (adjust as needed)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000); 

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []); // The empty array ensures this effect runs only once

  return isLoading ? (
    <SplashScreen />
  ) : (
    <div className="d-flex flex-column min-vh-100">
      <AppNavbar />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;