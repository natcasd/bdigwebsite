'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { PitchProps } from '~/shared/types';
import pitchesData from '../pitches.json';
import Link from 'next/link';

const PitchDetailPage = () => {
  const { security } = useParams();

  // Find the pitch data based on the security parameter
  const pitch = pitchesData.find((p) => p.security.toLowerCase() === (security as string).toLowerCase());

  if (!pitch) {
    return <p className="text-center mt-20 text-gray-600 dark:text-gray-300">Pitch not found.</p>;
  }

  const { image, date, summary, decklink } = pitch;

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto mb-12">
        <Link
          href="/pitches"
          className="text-primary-600 block dark:text-primary-400 mb-6 font-semibold hover:underline "
        >
          &lt; Go back
        </Link>
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">{pitch.security}</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{date}</p>
        {image && (
          <div className="relative w-full h-64 mb-6">
            <Image
              src={image}
              alt={pitch.security}
              className="object-cover w-full h-full rounded-md"
              fill
              sizes="(max-width: 768px) 100vw, 100vw"
            />
          </div>
        )}
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">{summary}</p>
        <a
          href={decklink}
          className="text-primary-600 dark:text-primary-400 font-semibold hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Pitch Deck
        </a>
      </div>
    </div>
  );
};

export default PitchDetailPage;
