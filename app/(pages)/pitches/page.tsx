// pages/pitches/index.tsx
import React from 'react';
import PitchCard from '~/components/widgets/PitchCard';
import { PitchProps } from '~/shared/types';
import pitchesData from './pitches.json';

const PitchesPage = () => {
  const pitches: PitchProps[] = pitchesData;

  return (
    <div className="dark:bg-gray-900 py-12 px-6 md:px-12 lg:px-24">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Pitches</h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {pitches.map((pitch) => (
          <PitchCard key={pitch.security} {...pitch} />
        ))}
      </div>
    </div>
  );
};

export default PitchesPage;
