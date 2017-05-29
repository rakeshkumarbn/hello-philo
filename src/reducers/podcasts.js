import { ADD_PODCASTS } from '../actions';
import { createReducer } from '../utils';

const addPodcasts = (state, { payload }) =>
  payload.reduce((result, podcast) => ({ ...result, [podcast.slug]: podcast }), state);

const handlers = {
  [ADD_PODCASTS]: addPodcasts,
};

export default createReducer({}, handlers);
