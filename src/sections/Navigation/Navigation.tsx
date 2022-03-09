import React from 'react';
import styles from './Navigation.module.css';
import t from '../../utils/translate';

type NavigationProps = {
  lang: 'RU' | 'EN';
};

function Navigation(props: NavigationProps): JSX.Element {
  const { lang } = props;
  return (
    <nav className={styles.Navigation}>
      <ul>
        <li><a href="#museum">{t('museum', lang)}</a></li>
        <li><a href="#visitors">{t('visitors', lang)}</a></li>
        <li><a href="#exhibitions">{t('exhibitions', lang)}</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
