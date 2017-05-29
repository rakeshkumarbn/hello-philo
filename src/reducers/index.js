import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import podcasts from './podcasts';
import player from './player';

export default combineReducers({ routing, podcasts, player });
