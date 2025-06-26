import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Mens from './Mens';

function Layout() {
  return (
    <div>
      <Navbar />
      <main className="pt-18 px-4">
        
        <Outlet />
      </main>
    </div>
  );
}
export default Layout;
