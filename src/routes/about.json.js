import * as fromApi from '../services/api';

export async function get(req, res) {
  const bioEntry = await fromApi.fetchEntriesForContentType('bio');
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(
    JSON.stringify({
      bioEntry: bioEntry[0].fields,
    })
  );
}
