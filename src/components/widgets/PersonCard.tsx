import React from 'react';
import { PeopleProps } from '~/shared/types';
import Image from 'next/image';

const PersonCard = ({ name, image, position, hometown, concentration, derivative, funfact }: PeopleProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {image && (
          <div className="relative w-full h-48 md:w-1/3 md:h-auto">
            <Image
              src={`/images/profiles/${image}`}
              alt={name}
              className="object-cover w-full h-full"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
        )}
        <div className="p-6 flex-1">
          {name && <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">{name}</h2>}
          {position && (
            <p className="text-gray-600 dark:text-gray-400 mb-1">
              <i>{position}</i>
            </p>
          )}
          {hometown && (
            <p className="text-gray-600 dark:text-gray-400 mb-1">
              <strong>Hometown:</strong> {hometown}
            </p>
          )}
          {concentration && (
            <p className="text-gray-600 dark:text-gray-400 mb-1">
              <strong>Concentration:</strong> {concentration}
            </p>
          )}
          {derivative && (
            <p className="text-gray-600 dark:text-gray-400 mb-1">
              <strong>Derivative:</strong> {derivative}
            </p>
          )}
          {funfact && (
            <p className="text-gray-600 dark:text-gray-400">
              <strong>Fun Fact:</strong> {funfact}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
