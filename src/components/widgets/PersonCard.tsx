'use client';
import React, { useState } from 'react';
import { Person } from '~/contentful/memberPeople';

export interface PersonCardProps {
  person: Person;
}

const PersonCard: React.FC<PersonCardProps> = ({ person }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-clip shadow-lg h-96 " onClick={handleCardClick}>
      <div className="relative w-full h-full">
        {person.profilePic && (
          <>
            {/* Profile Image */}
            <img
              className="w-full h-full object-cover transition-transform duration-700"
              src={person.profilePic.src}
              alt={person.profilePic.alt}
              style={{ transform: isFlipped ? 'translateY(-100%)' : 'translateY(0)', objectPosition: 'top' }}
            />

            {/* Sliding Banner */}
            <div
              className={`absolute bottom-0 w-full text-white py-2 px-4 transition-all duration-700 ${
                isFlipped ? 'translate-y-[-500%]' : 'translate-y-0'
              }`}
              style={{ backgroundColor: isFlipped ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.5)' }}
            >
              <h2 className="text-xl font-semibold">{person.name}</h2>
              {person.position && (
                <p className="text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                  <i>{person.position}</i>
                </p>
              )}
            </div>
          </>
        )}

        {/* Additional Details Section */}
        <div
          className={`absolute bottom-10 w-full bg-white dark:bg-gray-800 p-6 transition-all duration-700 ${
            isFlipped ? 'translate-y-0' : 'translate-y-full opacity-0'
          }`}
        >
          {person.hometown && (
            <p className="text-gray-600 dark:text-gray-400 mb-1">
              <strong>
                <u>Hometown:</u>
              </strong>
              <span className="block">{person.hometown}</span>
            </p>
          )}
          {person.concentration && (
            <p className="text-gray-600 dark:text-gray-400 mb-1">
              <strong>
                <u>Concentration:</u>
              </strong>
              <span className="block">{person.concentration}</span>
            </p>
          )}
          {person.derivative && (
            <p className="text-gray-600 dark:text-gray-400 mb-1">
              <strong>
                <u>Favorite derivative:</u>
              </strong>{' '}
              <span className="block">{person.derivative}</span>
            </p>
          )}
          {person.funfact && (
            <p className="text-gray-600 dark:text-gray-400">
              <strong>
                <u>Fun Fact:</u>
              </strong>{' '}
              <span className="block">{person.funfact}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default PersonCard;
