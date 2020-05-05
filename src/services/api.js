'use strict';

import * as contentful from 'contentful';

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: ACCESS_TOKEN,
});

// Load all Content Types in your space from Contentful
export function fetchContentTypes() {
  return client
    .getContentTypes()
    .then((response) => response.items)
    .catch((error) => {
      console.log('\nError occurred while fetching Content Types:');
      console.error(error);
    });
}

// Load all entries for a given Content Type from Contentful
export function fetchEntriesForContentType(contentType) {
  return client
    .getEntries({
      content_type: contentType,
    })
    .then((response) => response.items)
    .catch((error) => {
      console.log(`\nError occurred while fetching Entries for ${contentType.name}:`);
      console.error(error);
    });
}
