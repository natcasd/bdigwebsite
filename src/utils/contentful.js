import { createClient } from 'contentful';

const client = createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
});

// Retrieve the list of blog posts from Contentful
const getPeople = async () => {
  const response = await client.getEntries({
    content_type: 'people',
  });
  return response.items;
};

const getPitches = async () => {
  const response = await client.getEntries({
    content_type: 'pitch',
  });
  return response.items;
};

export { getPeople, getPitches };
