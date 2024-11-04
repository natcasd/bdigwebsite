import { HeaderProps } from '../types';

// Header data
export const headerData: HeaderProps = {
  links: [
    {
      label: 'Home',
      href: '/',
      cta: false,
    },
    {
      label: 'Our Team',
      href: '/people',
      cta: false,
    },
    {
      label: 'Pitches',
      href: '/pitches',
      cta: false,
    },
    {
      label: 'Join Us',
      href: '/join',
      cta: true,
    },
  ],
  isSticky: true,
  showToggleTheme: false,
  showRssFeed: false,
  position: 'right',
};
