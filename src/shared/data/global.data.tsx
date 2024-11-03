import { HeaderProps } from '../types';

// Header data
export const headerData: HeaderProps = {
  links: [
    {
      label: 'About Us',
      href: '/about',
    },
    {
      label: 'Our Team',
      href: '/people',
    },
    {
      label: 'Pitches',
      href: '/pitches',
    },
    {
      label: 'Join Us',
      href: '/join',
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'right',
};
