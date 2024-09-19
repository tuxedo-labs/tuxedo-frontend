import React from 'react';
import { Heading } from '../elements/Heading';
import { BlogSectionType } from '~/types/fragments/Blog';

export const BlogSection: React.FC<BlogSectionType> = ({ children, search }) => {
  const title = import.meta.env.VITE_APP_NAME;

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <Heading
          title={`${title} Blog`}
          subtitle="Selamat datang di blog official Tuxedo Labs yang di kembangan oleh rafia9005."
        />
        <div>
          <div>
            {search}
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 flex-grow">
          {children}
        </div>
      </div>
    </section>
  );
};
