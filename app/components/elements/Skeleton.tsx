import React from 'react';

export const SkeletonArticleCard: React.FC = () => (
  <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 animate-pulse">
    <div className="flex justify-between items-center mb-5">
      <div className="h-4 bg-gray-300 rounded dark:bg-gray-700 w-24"></div>
    </div>
    <div className="h-8 bg-gray-300 rounded dark:bg-gray-700 w-full mb-4"></div>
    <div className="h-4 bg-gray-300 rounded dark:bg-gray-700 w-3/4 mb-4"></div>
    <div className="h-4 bg-gray-300 rounded dark:bg-gray-700 w-5/6 mb-5"></div>
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="h-8 w-8 bg-gray-300 rounded-full dark:bg-gray-700"></div>
        <div className="h-4 bg-gray-300 rounded dark:bg-gray-700 w-24"></div>
      </div>
      <div className="h-4 bg-gray-300 rounded dark:bg-gray-700 w-20"></div>
    </div>
  </article>
);

