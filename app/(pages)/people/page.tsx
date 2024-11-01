// pages/PeoplePage.tsx

import { PeopleProps } from '~/shared/types';
import PersonCard from '~/components/widgets/PersonCard';
import peopleData from './people.json';
import React from 'react';

const PeoplePage = () => {
  const people: PeopleProps[] = peopleData;

  return (
    <section id="peoplePage">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
            {people.map((person, index) => (
              <PersonCard key={index} {...person} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeoplePage;
