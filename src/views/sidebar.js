import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

import { LogoIcon } from './icons';
import styles from '../styles/sidebar';

const navSections = [
  ['', <LogoIcon classNames={styles.icon} />, ''],
];

function Sidebar() {
  const navComponent = navSections.map(([iconKey, Icon, text]) => (
    <li key={iconKey} className={classNames([styles.sidebarNavItem, styles[`navItem${iconKey}`]])}>
      <Link to={`/${iconKey}`}>{Icon}{text}</Link>
    </li>
  ));

  return (
    <div className={styles.sidebarPane}>
      <ul className={styles.sidebarNav}>
        {navComponent}
      </ul>
    </div>
  );
}

export default Sidebar;
