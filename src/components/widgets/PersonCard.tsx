import React from 'react';
import { Person } from '~/contentful/memberPeople';

export interface PersonCardProps {
  person: Person;
}

const PersonCard: React.FC<PersonCardProps> = ({ person }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {person.profilePic && (
          <div className="relative w-full h-48 md:w-1/3 md:h-auto">
            <img
              className="w-full h-full object-cover"
              src={person.profilePic.src}
              // Use the Contentful Images API to render
              // responsive images. No next/image required:
              srcSet={`${person.profilePic.src}?w=300 1x, ${person.profilePic.src} 2x`}
              alt={person.profilePic.alt}
            />
          </div>
        )}
        <div className="p-6 flex-1">
          {person.name && <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">{person.name}</h2>}
          {person.position && (
            <p className="text-gray-600 dark:text-gray-400 mb-1">
              <i>{person.position}</i>
            </p>
          )}
          {person.hometown && (
            <p className="text-gray-600 dark:text-gray-400 mb-1">
              <strong>Hometown:</strong> {person.hometown}
            </p>
          )}
          {person.concentration && (
            <p className="text-gray-600 dark:text-gray-400 mb-1">
              <strong>Concentration:</strong> {person.concentration}
            </p>
          )}
          {person.derivative && (
            <p className="text-gray-600 dark:text-gray-400 mb-1">
              <strong>Favorite derivative:</strong> {person.derivative}
            </p>
          )}
          {person.funfact && (
            <p className="text-gray-600 dark:text-gray-400">
              <strong>Fun Fact:</strong> {person.funfact}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
