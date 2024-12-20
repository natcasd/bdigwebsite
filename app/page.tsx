import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero';
import Content from '~/components/widgets/Content';
import Join from '~/components/widgets/Join';
import JoinUs from '~/components/widgets/JoinCTA';
import AboutUs from '~/components/widgets/About';
import { heroHome, aboutUsData } from '~/shared/data/pages/home.data';

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {
  return (
    <>
      <Hero {...heroHome} />
      <AboutUs {...aboutUsData} />
      <JoinUs />
    </>
  );
}
