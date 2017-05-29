import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from '../styles/podcast-list-item';

function PodcastListItem(props) {
  const { title, slug, image = [] } = props;
  const imgSrc = image[0] ? image[0].url : null;
  const imgAlt = image[0] ? image[0].title : null;

  return (
    <li className={styles.podcastListItem} >
      <Link className={styles.itemLink} to={`/${slug}`} data-title={title}>
        <img alt={imgAlt} src={imgSrc} className={styles.itemImg} />
      </Link>
    </li>
  );
}

PodcastListItem.propTypes = {
  title: PropTypes.array,
  slug: PropTypes.string,
  image: PropTypes.array,
};

export default PodcastListItem;
