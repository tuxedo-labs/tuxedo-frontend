import React from "react";
import { DefaultButtonProps } from "~/types/Elemtents";

export const DefaultButton: React.FC<DefaultButtonProps> = ({
  type = 'button', children
}) => {
  return (
    <button
      type={type}
      className="w-full py-3 px-5 text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 transition duration-300 ease-in-out transform"
    >
      {children}
    </button>
  );
};

