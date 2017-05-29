import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as playerActions from '../action-creators/player';
import styles from '../styles/player';

function Player(props) {
  const { title, podcastTitle, src } = props;

  const audioEl = src ? <audio src={src} controls autoPlay /> : null;

  return (
    <div className={styles.playerContainer}>
      <div className={styles.player}>
        {podcastTitle} - {title}
        {audioEl}
      </div>
    </div>
  );
}
Player.propTypes = {
  title: PropTypes.string,
  podcastTitle: PropTypes.string,
  src: PropTypes.string,
};

const mapStateToProps = ({ player }) => player;
const mapDispatchToProps = (dispatch) => bindActionCreators(playerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
