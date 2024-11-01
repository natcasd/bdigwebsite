import React from 'react';

const JoinUsSection = () => {
  return (
    <section className="dark:bg-gray-900 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Join Us ...</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          BDIG convenes weekly on <strong>Wednesday</strong> at <strong>8:00 p.m.</strong> in{' '}
          <strong>Friedman 202</strong>
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          We encourage everyone interested to attend our weekly meetings and participate in our proposals! Anyone
          attending weekly BDIG sessions is automatically a General Body member. See you all very soon.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Contact us at{' '}
          <a
            href="mailto:bdig@brown.edu?subject=Contact%20Form"
            className="text-primary-600 dark:text-primary-400 font-semibold hover:underline"
          >
            bdig@brown.edu
          </a>{' '}
          if you have any questions!
        </p>
      </div>
    </section>
  );
};

export default JoinUsSection;
