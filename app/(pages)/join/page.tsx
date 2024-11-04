'use client';
import React from 'react';
import Image from 'next/image';
import { joinGallery } from '~/shared/data/pages/home.data';
import { GalleryImage } from '~/shared/types';

const JoinUsSection = () => {
  return (
    <section className="flex py-12 px-2 md:px-12 lg:px-8 dark:bg-gray-900">
      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
        {/* Right Section: Text Content */}
        <div className="md:text-left w-full md:w-1/3 mb-6 md:mr-10">
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
        {/* Left Section: Gallery */}
        <div className="flex flex-col items-center md:mb-0 w-full md:w-2/3">
          {/* Custom Grid Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full masonry-grid">
            {joinGallery.images.map((image: GalleryImage, index: number) => (
              <div
                key={index}
                className="relative"
                style={{ gridRow: `span ${Math.ceil(image.height / 200)}` }} // Dynamic row span
              >
                <Image
                  src={image.src}
                  alt={image.alt || `Image ${index + 1}`}
                  width={image.width}
                  height={image.height}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
