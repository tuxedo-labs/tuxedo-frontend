import React from 'react';
import { Link } from 'react-router-dom';

interface ListSideBarProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

export const ListSideBar: React.FC<ListSideBarProps> = ({ to, icon, label }) => {
  return (
    <Link to={to} className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group rounded-full">
      {icon}
      <span className="sr-only">{label}</span>
    </Link>
  );
};


