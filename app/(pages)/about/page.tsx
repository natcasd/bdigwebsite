import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-0 px-4 md:px-80 bg-white dark:bg-gray-900">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-10 mt-4 md:mt-6">
        Our Story
      </h1>

      <p className="text-gray-700 dark:text-gray-200 text-lg md:text-xl mb-4 md:mb-6">
        Once upon a time, a group of Brown University students were passionate about the world of finance and investing,
        specifically derivatives. They had taken classes in finance and economics and even interned at various
        investment firms, but they all felt that something was missing from their education – real-world experience in
        the opaque and complex world of derivatives.
      </p>

      <p className="text-gray-700 dark:text-gray-200 text-lg md:text-xl mb-4 md:mb-6">
        One day, a student named Harrison had an idea. He proposed starting a club at Brown University that would allow
        students to come together and learn about investing and finance through hands-on experience in derivatives. The
        group of students loved the idea and set out to make it a reality. They had a vision and a mission to make the
        world of derivatives more accessible and were willing to put in the effort to make it happen.
      </p>

      <p className="text-gray-700 dark:text-gray-200 text-lg md:text-xl mb-4 md:mb-6">
        Now, with $1,000,000 of simulated funds and a dream, they have set out to demystify the world of derivatives
        with a fun, hands-on approach to trading.
      </p>
    </div>
  );
};

export default AboutUs;
