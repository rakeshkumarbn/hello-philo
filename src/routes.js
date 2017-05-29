import React from 'react';
import { IndexRoute, Route } from 'react-router';

// Views
import App from './views/app';
import PodcastList from './views/podcast-list';
import PodcastEpisodeList from './views/podcast-episode-list';

const Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={PodcastList} />
    <Route path=":podcastId" component={PodcastEpisodeList} />
  </Route>
);

export default Routes;
