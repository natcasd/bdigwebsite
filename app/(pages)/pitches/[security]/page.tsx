import React from 'react';
import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { fetchPitch, fetchPitches } from '~/contentful/pitchEntry';
import Link from 'next/link';
import RichText from '~/contentful/RichText';

interface PitchPageParams {
  security: string;
}

interface PitchPageProps {
  params: PitchPageParams;
}

// Tell Next.js about all our blog posts so
// they can be statically generated at build time.
export async function generateStaticParams(): Promise<PitchPageParams[]> {
  const pitchPosts = await fetchPitches();
  return pitchPosts.map((post) => ({ security: post.security.replace(/\s+/g, '-') }));
}

// For each blog post, tell Next.js which metadata
// (e.g. page title) to display.
export async function generateMetadata({ params }: PitchPageProps, parent: ResolvingMetadata): Promise<Metadata> {
  const pitchPost = await fetchPitch({ security: params.security.replace(/-/g, ' ') });

  if (!pitchPost) {
    return notFound();
  }

  return {
    title: pitchPost.security,
  };
}

// The actual BlogPostPage component.
async function PitchPage({ params }: PitchPageProps) {
  // Fetch a single blog post by slug,
  // using the content preview if draft mode is enabled:
  const pitchPost = await fetchPitch({ security: params.security.replace(/-/g, ' ') });

  if (!pitchPost) {
    // If a blog post can't be found,
    // tell Next.js to render a 404 page.
    return notFound();
  }
  return (
    <div className=" dark:bg-gray-900 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto mb-12">
        <Link
          href="/pitches"
          className="text-primary-600 block dark:text-primary-400 mb-6 font-semibold hover:underline "
        >
          &lt; Go back
        </Link>
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">{pitchPost.security}</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{pitchPost.meetingDate}</p>
        {pitchPost.image && (
          <div className="relative w-full h-64 mb-6">
            <img
              src={pitchPost.image.src}
              // Use the Contentful Images API to render
              // responsive images. No next/image required:
              srcSet={`${pitchPost.image.src}?w=300 1x, ${pitchPost.image.src} 2x`}
              className="object-cover w-full h-full rounded-md"
              alt={pitchPost.image.alt}
            />
          </div>
        )}
        <RichText document={pitchPost.description} />

        <a
          href={pitchPost.pitchDeckLink}
          className="text-primary-600 dark:text-primary-400 font-semibold hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Pitch Deck
        </a>
      </div>
    </div>
  );
}

export default PitchPage;
