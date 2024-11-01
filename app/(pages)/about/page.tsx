import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">About Us</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-4 text-left">
          At Brown University, a group of driven students with a shared passion for finance and investing set out to
          uncover the intricacies of the derivatives market. While they had excelled in finance and economics classes
          and gained experience through internships at various investment firms, they realized that one essential
          element was missing from their education: real-world exposure to the complex and opaque world of derivatives.
        </p>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-4 text-left">
          It was then that Harrison, one of our founding members, proposed an idea. His vision was to create a club that
          would bring students together, giving them hands-on experience in the derivatives market. Our mission was
          simple: to make the world of derivatives accessible, engaging, and educational for students who wanted to go
          beyond theory.
        </p>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-4 text-left">
          Armed with $1,000,000 in simulated capital and a shared dream, we embarked on a journey to demystify the
          complexities of derivatives trading. Through our club, we aim to foster a fun, supportive environment where
          students can learn, experiment, and grow their understanding of derivatives and broader financial strategies.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 text-left">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300 text-left">
            To provide students with hands-on exposure to the world of derivatives and trading, equipping them with the
            knowledge and experience to navigate complex financial markets.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 text-left">Our Vision</h2>
          <p className="text-gray-600 dark:text-gray-300 text-left">
            To bridge the gap between theoretical finance education and real-world applications, making derivatives
            accessible to students in a collaborative and practical environment.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 text-left">Our Approach</h2>
          <p className="text-gray-600 dark:text-gray-300 text-left">
            With a simulated fund of $1,000,000, we engage in experiential learning that involves strategizing, trading,
            and risk management within a supportive club setting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
