import React from "react";
import { ArticleHeaderType } from "~/types/elements/Article";

export const ArticleHeader: React.FC<ArticleHeaderType> = ({ name, time, title, avatar }) => {
  const getPlaceholder = (name: string) => {
    const initials = name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
    return initials;
  };

  const placeholderImage = (
    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-500 text-white text-xl">
      {getPlaceholder(name)}
    </div>
  );

  return (
    <header className="mb-4 lg:mb-6 not-format">
      <address className="flex items-center mb-6 not-italic">
        <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white gap-5">
          {avatar ? (
            <img className="mr-4 w-16 h-16 rounded-full" src={avatar} alt={name} />
          ) : (
            placeholderImage
          )}
          <div>
            <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">{name}</a>
            <p className="text-base text-gray-500 dark:text-gray-400">{time}</p>
          </div>
        </div>
      </address>
      <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{title}</h1>
    </header>
  );
};

