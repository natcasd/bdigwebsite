// pages/PeoplePage.tsx

import PersonCard from '~/components/widgets/PersonCard';
import React from 'react';
import { fetchPeople, Person } from '~/contentful/memberPeople';

async function PeoplePage() {
  const people: Person[] = await fetchPeople();

  return (
    <section id="peoplePage">
      <div className="mx-auto max-w-7xl py-10 px-4 sm:px-6">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Our Team</h1>
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
