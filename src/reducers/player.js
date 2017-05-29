import { LOAD_PODCAST_EPISODE } from '../actions';
import { createReducer } from '../utils';

const loadEpisode = (state, { payload }) => ({ ...state, ...payload });

const handlers = {
  [LOAD_PODCAST_EPISODE]: loadEpisode,
};

export default createReducer({}, handlers);
