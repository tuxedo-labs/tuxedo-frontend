import React from 'react';
import { Heading } from '../elements/Heading';
import { BlogSectionType } from '~/types/BlogType';

export const BlogSection: React.FC<BlogSectionType> = ({ children }) => {
  const title = import.meta.env.VITE_APP_NAME;

  return (
    <section className="bg-white dark:bg-gray-900 h-screen">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <Heading
          title={`${title} Blog`}
          subtitle="We use an agile approach to test assumptions and connect with the needs of your audience early and often."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          {children}
        </div>
      </div>
    </section>
  );
};

