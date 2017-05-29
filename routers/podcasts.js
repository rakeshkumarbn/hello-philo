var express = require('express');
var router = new express.Router();
import { fetchFeed } from '../feed-tools';
const jjUrl = 'http://feeds.feedwrench.com/JavaScriptJabber.rss';
const lcUrl = 'http://feeds.feedburner.com/SlateLexiconValley';
const seUrl = 'http://feed.songexploder.net/songexploder';
const waUrl = 'http://feeds.5by5.tv/webahead';
const casts = [jjUrl, lcUrl, seUrl, waUrl];

function createRouter() {
  async function handleIndex(req, res) {
    const feeds = await Promise.all(casts.map(fetchFeed));
    res.json(feeds);
  }

  router.get('/', handleIndex);

  return router;
}

module.exports = createRouter;
