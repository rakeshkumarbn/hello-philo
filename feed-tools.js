import {parseString} from 'xml2js';
import fetch from 'isomorphic-fetch';
import slug from 'slug';

function destructureFeed(feed) {
  const {rss: {channel: [data]}} = feed;
  const feedInfo = {...data, slug: slug(data.title)};
  return Promise.resolve(feedInfo);
}

function parseFeed(xml) {
  return new Promise((resolve, reject) => {
    parseString(xml, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

export function fetchFeed(feed) {
  return fetch(feed)
    .then(r => r.text())
    .then(parseFeed)
    .then(destructureFeed)
    .catch(e => console.log(e));
}


