import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful';

export interface TypePeopleFields {
  name?: EntryFieldTypes.Symbol;
  position?: EntryFieldTypes.Symbol;
  hometown?: EntryFieldTypes.Symbol;
  concentration?: EntryFieldTypes.Symbol;
  derivative?: EntryFieldTypes.Symbol;
  funFact?: EntryFieldTypes.Symbol;
  profilePic?: EntryFieldTypes.AssetLink;
  slug: EntryFieldTypes.Integer;
}

export type TypePeopleSkeleton = EntrySkeletonType<TypePeopleFields, 'people'>;
export type TypePeople<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypePeopleSkeleton,
  Modifiers,
  Locales
>;
