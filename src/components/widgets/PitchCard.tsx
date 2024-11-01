// components/PitchCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PitchProps } from '~/shared/types';

const PitchCard = ({ security, image, date, summary }: PitchProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      {image && (
        <div className="relative w-full h-48">
          <Image
            src={image}
            alt={security}
            className="object-cover w-full h-full"
            fill
            sizes="(max-width: 768px) 100vw, 100vw"
            priority
          />
        </div>
      )}
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">{security}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{date}</p>
        <Link
          href="/pitches/[id]"
          as={`/pitches/${security}`}
          className="text-primary-600 dark:text-primary-400 font-semibold hover:underline"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PitchCard;
