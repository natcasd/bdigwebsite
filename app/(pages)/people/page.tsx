// pages/PeoplePage.tsx

import PersonCard from '~/components/widgets/PersonCard';
import React from 'react';
import { fetchPeople, Person } from '~/contentful/memberPeople';

async function PeoplePage() {
  const people: Person[] = await fetchPeople();

  return (
    <section id="peoplePage">
      <div className="mx-auto max-w-7xl py-5 px-4 sm:px-6">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Our Team</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 italic mb-4">Click to learn more about us</p>
        <hr className="mb-2 border-t-2 border-black dark:border-gray" />
        <div className="py-7 md:py-7">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {people.map((person, index) => (
              <PersonCard key={index} person={person} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PeoplePage;
