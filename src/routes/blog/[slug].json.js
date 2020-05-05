import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import * as fromApi from '../../services/api';
import marked from 'marked';
import hljs from 'highlight.js';

const lookup = new Map();

marked.setOptions({
  highlight: function (code, lang) {
    if (typeof lang === 'undefined') {
      return hljs.highlightAuto(code).value;
    } else if (lang === 'nohighlight') {
      return code;
    } else {
      return hljs.highlight(lang, code).value;
    }
  },
});

export async function get(req, res, next) {
  const { slug } = req.params;

  const postEntries = await fromApi.fetchEntriesForContentType('article');
  const posts = postEntries.map((entry) => {
    return {
      ...entry.fields,
      html: marked(documentToPlainTextString(entry.fields.content)),
    };
  });
  posts.forEach((post) => {
    lookup.set(post.slug, JSON.stringify(post));
  });

  if (lookup.has(slug)) {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });

    res.end(lookup.get(slug));
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json',
    });

    res.end(
      JSON.stringify({
        message: `Not found`,
      })
    );
  }
}
