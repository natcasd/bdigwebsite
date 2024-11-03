import React from 'react';
import { AboutUsProps } from '~/shared/types';

const AboutUs = ({ title, content }: AboutUsProps) => {
  return (
    <section className="flex flex-col items-start justify-center w-full py-8 px-0 md:px-20 bg-amber-100 dark:bg-gray-900">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 w-full px-4 md:px-6">{title}</h1>

      {content.map((paragraph, index) => (
        <p key={index} className="text-gray-700 dark:text-gray-200 text-lg md:text-lg mb-3 w-full px-4 md:px-6">
          {paragraph}
        </p>
      ))}
    </section>
  );
};

export default AboutUs;
