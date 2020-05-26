import * as fromApi from '../services/api';

export async function get(req, res) {
  const projectEntries = await fromApi.fetchEntriesForContentType('project');
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(
    JSON.stringify({
      entries: projectEntries.map((projectEntry) => projectEntry.fields)
    })
  );
}
