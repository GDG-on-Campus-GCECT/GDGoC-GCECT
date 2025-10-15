import React from 'react';
import { Outlet } from 'react-router-dom';
import AppNavbar from './AppNavbar'; // Your existing Navbar
import Footer from './Footer';     // Your existing Footer

function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <AppNavbar />
      {/* The Outlet component renders the current page */}
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;