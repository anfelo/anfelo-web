import * as fromApi from '../../services/api';

export async function get(req, res) {
  const postEntries = await fromApi.fetchEntriesForContentType('article');
  const posts = postEntries.map((entry) => entry.fields);
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(JSON.stringify(posts));
}
