import React from 'react';
import Image from 'next/image';
import bannerWhite from '~/assets/images/box-white.png';

const JoinUsSection = () => {
  return (
    <section className="flex items-center justify-center py-12 px-2 md:px-12 lg:px-8 dark:bg-gray-900">
      <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto">
        {/* Left Image */}
        <div className="mb-14 md:mb-0 md:mr-14">
          <Image
            src={bannerWhite}
            alt="BDIG Banner"
            width={700} // Adjust width and height as per your needs
            height={700}
            className="max-w-[210px] sm:max-w-[200px] md:max-w-[500px] lg:max-w-[500px]"
          />
        </div>

        {/* Right Text Content */}
        <div className="md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Join Us</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            BDIG convenes weekly on <strong>Wednesday (8:00 p.m.)</strong> in <strong>Friedman 202</strong>.
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
      </div>
    </section>
  );
};

export default JoinUsSection;
