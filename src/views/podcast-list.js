import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Podcast from './podcast-list-item';
import styles from '../styles/podcast-list';
import * as podcastActions from '../action-creators/podcasts';

function PodcastList(props) {
  const { podcasts = [] } = props;
  const titles = Object.keys(podcasts);
  return (
    <ul className={styles.podcastList}>
      {
        titles.map(title => <Podcast key={title} {...podcasts[title]} />)
      }
    </ul>
  );
}
PodcastList.propTypes = {
  podcasts: PropTypes.object,
};

const mapStateToProps = ({ podcasts }) => ({ podcasts });
const mapDispatchToProps = (dispatch) => bindActionCreators(podcastActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PodcastList);
