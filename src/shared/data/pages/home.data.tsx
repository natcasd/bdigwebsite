import { HeroProps, ContentProps, AboutUsProps } from '../../types';
import heroImg from '~/assets/images/tradingdesk.jpg';

// Hero data on Home page *******************
export const heroHome: HeroProps = {
  title: <>We are the Brown Derivatives Investment Group.</>,

  image: {
    src: heroImg,
    alt: 'Hero TailNext',
  },
};

// Content data on Home page *******************
export const contentHomeOne: ContentProps = {
  id: 'contentOne-on-home-one',
  hasBackground: true,

  content:
    'Once upon a time, a group of Brown University students were passionate about the world of finance and investing, specifically derivatives. They had taken classes in finance and economics. They even interned at various investment firms, but they all felt that there was something missing from their education - real-world experience in the opaque and complex world of derivatives. One day, a student named Harrison had an idea. He proposed starting a club at Brown University that would allow students to come together and learn about investing and finance through hands-on experience in derivatives. The group of students loved the idea and set out to make it a reality. They had a vision and a mission to make the world of derivatives more accessible and were willing to put in the effort to make it happen. Now, with $1,000,000 of fake money and a dream, they have set out to demystify the world of derivatives with a fun, hands-on approach to trading.',
};
export const aboutUsData: AboutUsProps = {
  title: 'Our Story',
  content: [
    'Once upon a time, a group of Brown University students were passionate about the world of finance and investing, specifically derivatives. They had taken classes in finance and economics and even interned at various investment firms, but they all felt that something was missing from their education – real-world experience in the opaque and complex world of derivatives.',
    'One day, a student named Harrison had an idea. He proposed starting a club at Brown University that would allow students to come together and learn about investing and finance through hands-on experience in derivatives. The group of students loved the idea and set out to make it a reality. They had a vision and a mission to make the world of derivatives more accessible and were willing to put in the effort to make it happen.',
    'Now, with $1M of simulated funds and a dream, they have set out to demystify the world of derivatives with a fun, hands-on approach to trading.',
  ],
};
