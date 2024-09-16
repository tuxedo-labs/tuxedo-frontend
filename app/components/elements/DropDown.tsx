import React, { useState } from 'react';

interface DropdownItem {
  label: string;
  to: string;
}

interface DropdownProps {
  items: DropdownItem[];
  isOpen: boolean;
  onClose: () => void;
}

export const Dropdown: React.FC<DropdownProps> = ({ items, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-12 right-0 bg-white dark:bg-gray-800 shadow-lg rounded-lg w-48">
      <ul className="py-1">
        {items.map((item) => (
          <li key={item.to}>
            <a
              href={item.to}
              className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={onClose}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

