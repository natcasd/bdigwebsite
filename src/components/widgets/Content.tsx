import React from 'react';
import Image from 'next/image';
import { IconCheck } from '@tabler/icons-react';

import { ContentProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';

const Content = ({ content, id, hasBackground = false }: ContentProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground}>
    <div className="mx-auto max-w-7xl">
      <div className="self-center md:basis-1/2">
        {content && <div className="mb-8 lg:mb-12 text-lg text-gray-600 dark:text-slate-400">{content}</div>}
      </div>
    </div>
  </WidgetWrapper>
);

export default Content;
