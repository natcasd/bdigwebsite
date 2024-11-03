// pages/pitches/index.tsx
import React from 'react';
import PitchCard from '~/components/widgets/PitchCard';
import { fetchPitches, Pitch } from '~/contentful/pitchEntry';

async function PitchesPage() {
  const pitches: Pitch[] = await fetchPitches();

  return (
    <div className="mx-auto max-w-7xl py-5 px-4 sm:px-6">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Pitches</h1>
      <hr className="border-t-2 border-black dark:border-gray mb-8" />

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {pitches.map((pitch) => (
          <PitchCard key={pitch.security} pitch={pitch} />
        ))}
      </div>
    </div>
  );
}

export default PitchesPage;
