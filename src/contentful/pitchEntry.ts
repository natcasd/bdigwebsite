import { TypePitchSkeleton } from './types';
import { Entry, EntryFieldTypes } from 'contentful';
import { Document as RichTextDocument } from '@contentful/rich-text-types';
import contentfulClient from './contentfulClient';
import { ContentImage, parseContentfulContentImage } from './contentImage';

type pitchEntry = Entry<TypePitchSkeleton, undefined, string>;

// Our simplified version of a BlogPost.
// We don't need all the data that Contentful gives us.
export interface Pitch {
  security: string;
  meetingDate: string;
  image: ContentImage | null;
  description: RichTextDocument | null;
  pitchDeckLink: string;
}

// Utility function to format the meeting date and generate the slug

export function formatMeetingDate(date: string | number | Date): { formatted: string } {
  if (!date) return { formatted: '' };

  // Ensure date is parsed correctly if it's not already a Date object
  const dateObject = date instanceof Date ? date : new Date(date);

  // Check for invalid dates
  if (isNaN(dateObject.getTime())) {
    return { formatted: '' };
  }

  // Format the date to 'Month Day, Year'
  const formatted = dateObject.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return { formatted };
}

// A function to transform a Contentful person
// into our own person object.
export function parseContentfulPitch(pitchEntry?: pitchEntry): Pitch | null {
  if (!pitchEntry) {
    return null;
  }
  const { formatted } = formatMeetingDate(pitchEntry.fields.meetingDate);

  return {
    security: pitchEntry.fields.security,
    meetingDate: formatted,
    image: parseContentfulContentImage(pitchEntry.fields.image),
    description: pitchEntry.fields.description,
    pitchDeckLink: pitchEntry.fields.pitchDeckLink,
  };
}

export async function fetchPitches(): Promise<Pitch[]> {
  const contentful = contentfulClient();

  const pitchesResult = await contentful.getEntries<TypePitchSkeleton>({
    content_type: 'pitch',
    include: 2,
    order: ['-fields.meetingDate'],
  });

  return pitchesResult.items.map((pitchEntry) => parseContentfulPitch(pitchEntry) as Pitch);
}

// A function to fetch a single person by its slug.
interface FetchPitchOptions {
  security: string;
}
export async function fetchPitch({ security }: FetchPitchOptions): Promise<Pitch | null> {
  const contentful = contentfulClient();

  const pitchesResult = await contentful.getEntries<TypePitchSkeleton>({
    content_type: 'pitch',
    'fields.security': security,
    include: 2,
  });

  return parseContentfulPitch(pitchesResult.items[0]);
}
