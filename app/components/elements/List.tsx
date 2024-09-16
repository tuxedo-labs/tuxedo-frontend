import React from 'react';
import { Link } from 'react-router-dom';

interface ListSideBarProps {
  to: string;
  icon?: React.ReactNode;
  label?: string;
  onClick?: () => void;
}

export const ListSideBar: React.FC<ListSideBarProps> = ({ to, icon, label, onClick }) => {
  return (
    <li>
      <Link
        to={to}
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        {icon}
        <span className="ms-3">{label}</span>
      </Link>
    </li>
  );
};
