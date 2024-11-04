import { StaticImageData } from 'next/image';
import { ReactElement } from 'react';
import type { TablerIcon } from '@tabler/icons-react';

type Widget = {
  id?: string;
  /** Does it have a background? */
  hasBackground?: boolean;
};

type WrapperTagProps = Widget & {
  children: React.ReactNode;
  containerClass?: string;
};

type BackgroundProps = {
  children?: React.ReactNode;
  hasBackground?: boolean;
};

type Header = {
  title?: string | ReactElement;
  subtitle?: string | ReactElement;
  tagline?: string;
  position?: 'center' | 'right' | 'left';
};

type HeadlineProps = {
  header: Header;
  containerClass?: string;
  titleClass?: string;
  subtitleClass?: string;
};

type Icon = TablerIcon;

type Image = {
  link?: string;
  src: string | StaticImageData;
  alt: string;
};

type Dropdown = {
  options: Tab[];
  activeTab: number;
  onActiveTabSelected: Function;
  iconUp?: ReactElement;
  iconDown?: ReactElement;
};

type ToggleMenuProps = {
  handleToggleMenuOnClick: MouseEventHandler<HTMLButtonElement>;
  isToggleMenuOpen: boolean;
};

type WindowSize = {
  width: number;
  height: number;
};

// WIDGETS
type HeroProps = {
  title?: string | ReactElement;
  subtitle?: string | ReactElement;
  image?: Image;
};

type ContentProps = Widget & {
  content?: string;
};

type HeaderProps = {
  links?: Array<MenuLink>;
  isSticky?: boolean;
  showToggleTheme?: boolean;
  showRssFeed?: boolean;
  position?: 'center' | 'right' | 'left';
};

type AboutUsProps = {
  title: string;
  content: string[];
};

type GalleryImage = {
  src: StaticImageData;
  width: number;
  height: number;
  alt: string;
};

type GalleryImagesProps = {
  images: GalleryImage[];
};
