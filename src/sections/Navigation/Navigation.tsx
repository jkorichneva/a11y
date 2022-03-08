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
      <a href="#museum">{t('museum', lang)}</a>
      <a href="#visitors">{t('visitors', lang)}</a>
      <a href="#exhibitions">{t('exhibitions', lang)}</a>
    </nav>
  );
}

export default Navigation;
