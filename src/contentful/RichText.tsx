import React from 'react';
import { Document as RichTextDocument } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

type RichTextProps = {
  document: RichTextDocument | null;
};

function RichText({ document }: RichTextProps) {
  if (!document) {
    return null;
  }

  return <div className="mb-4 leading-relaxed text-base">{documentToReactComponents(document)}</div>;
}

export default RichText;
