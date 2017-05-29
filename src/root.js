import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Routes from './routes';
import configureStore from './store';
import styles from './styles/root';
import { getPodcasts } from './action-creators/podcasts';

const store = configureStore({});
const history = syncHistoryWithStore(browserHistory, store);

class Root extends Component {
  componentDidMount() {
    store.dispatch(getPodcasts());
  }

  render() {
    return (
      <div className={styles.root} >
        <Provider store={store}>
          <Router history={history}>
            { Routes }
          </Router>
        </Provider>
      </div>
    );
  }
}

export default Root;
