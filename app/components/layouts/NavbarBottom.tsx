import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ListSideBar from '../elements/List';

interface SideBarProps {
  children: React.ReactNode;
}

export default function NavbarBottom({ children }: SideBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed bottom-0 left-0 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
        <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
          {children}
        </div>
      </div>
    </>
  );
}

