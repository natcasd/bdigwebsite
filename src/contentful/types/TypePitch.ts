import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful';

export interface TypePitchFields {
  security: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.RichText;
  meetingDate: EntryFieldTypes.Date;
  image?: EntryFieldTypes.AssetLink;
  pitchDeckLink: EntryFieldTypes.Symbol;
}

export type TypePitchSkeleton = EntrySkeletonType<TypePitchFields, 'pitch'>;
export type TypePitch<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypePitchSkeleton,
  Modifiers,
  Locales
>;
