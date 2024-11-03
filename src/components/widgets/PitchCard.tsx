// components/PitchCard.tsx
import React from 'react';
import Link from 'next/link';
import { Pitch } from '~/contentful/pitchEntry';

export interface PitchCardProps {
  pitch: Pitch;
}

const PitchCard: React.FC<PitchCardProps> = ({ pitch }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg">
      {pitch.image && (
        <div className="w-full h-48 flex items-stretch">
          <img
            className=" w-full h-full rounded-t-lg"
            src={pitch.image.src}
            // Use the Contentful Images API to render
            // responsive images. No next/image required:
            alt={pitch.image.alt}
          />
        </div>
      )}
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">{pitch.security}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{pitch.meetingDate}</p>
        <Link
          href="/pitches/[id]"
          as={`/pitches/${pitch.security.replace(/\s+/g, '-')}`}
          className="text-primary-600 dark:text-primary-400 font-semibold hover:underline"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PitchCard;
