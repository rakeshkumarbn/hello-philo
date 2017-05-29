import React, { PropTypes } from 'react';
import styles from '../styles/app';
import Sidebar from './sidebar';
import Player from './player';

function App(props) {
  return (
    <div className={styles.layout}>
      <div className={styles.topLayout}>
        <Sidebar />
        <div className={styles.main}>
          {props.children}
        </div>
      </div>
      <Player />
    </div>
  );
}

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;
