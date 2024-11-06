'use client'
import Breadcrumbs from '@/utils/Breadcrumbs';
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { useUser } from '@/context/UserContext';

export default function Page() {
  const [activeSection, setActiveSection] = useState('Dashboard');
  const { user } = useUser();

  return (
    <div className="flex w-full h-screen">
      <div className="flex flex-col flex-1 gap-5 p-5">
        <div className="flex justify-between">
          <Breadcrumbs />
          <p>
            Welcome! <span className="text-[#DB4444]">{user}</span>
          </p>
        </div>
        <div className="flex flex-row">
          <Sidebar/>
          <h1 className="text-2xl font-semibold">{activeSection}</h1>
          {/* Content for the active section */}
          <div className="mt-5">
            {/* Render content dynamically based on activeSection */}
            {activeSection === 'Dashboard' && <p>Dashboard content...</p>}
            {activeSection === 'Manage Account' && <p>Account management content...</p>}
            {activeSection === 'Settings' && <p>Settings content...</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
