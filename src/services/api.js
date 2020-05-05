import bio from '../data/bio/bio.js';

const siteData = {
  bio: bio,
};

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
  return siteData[contentType];
}
