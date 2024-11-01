import { TypePeopleSkeleton } from './types';
import { Entry } from 'contentful';
import contentfulClient from './contentfulClient';
import { ContentImage, parseContentfulContentImage } from './contentImage';

type PersonEntry = Entry<TypePeopleSkeleton, undefined, string>;

// Our simplified version of a BlogPost.
// We don't need all the data that Contentful gives us.
export interface Person {
  slug: number;
  name: string | undefined;
  position: string | undefined;
  hometown: string | undefined;
  concentration: string | undefined;
  derivative: string | undefined;
  funfact: string | undefined;
  profilePic: ContentImage | null;
}

// A function to transform a Contentful person
// into our own person object.
export function parseContentfulPerson(personEntry?: PersonEntry): Person | null {
  if (!personEntry) {
    return null;
  }

  return {
    slug: personEntry.fields.slug,
    name: personEntry.fields.name,
    position: personEntry.fields.position,
    hometown: personEntry.fields.hometown,
    concentration: personEntry.fields.concentration,
    derivative: personEntry.fields.derivative,
    funfact: personEntry.fields.funFact,
    profilePic: parseContentfulContentImage(personEntry.fields.profilePic),
  };
}

export async function fetchPeople(): Promise<Person[]> {
  const contentful = contentfulClient();

  const personsResult = await contentful.getEntries<TypePeopleSkeleton>({
    content_type: 'people',
    include: 2,
    order: ['fields.slug'],
  });

  return personsResult.items.map((personEntry) => parseContentfulPerson(personEntry) as Person);
}

// A function to fetch a single person by its slug.
interface FetchPersonOptions {
  slug: number;
}
export async function fetchPerson({ slug }: FetchPersonOptions): Promise<Person | null> {
  const contentful = contentfulClient();

  const peopleResult = await contentful.getEntries<TypePeopleSkeleton>({
    content_type: 'people',
    'fields.slug': slug,
    include: 2,
  });

  return parseContentfulPerson(peopleResult.items[0]);
}
