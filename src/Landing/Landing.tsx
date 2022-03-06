import React from 'react';
import Header from '../components/Header/Header';
import styles from './Landing.module.css';
import t from '../utils/translate';

type LandingProps = {
  lang: 'RU' | 'EN';
};

function Landing(props: LandingProps): JSX.Element {
  const { lang } = props;
  return (
    <div className={styles.Landing}>
      <a href="#main" className={styles.SkipLink}>{t('skipLink', lang)}</a>
      <Header lang={lang} />
    </div>
  );
}

export default Landing;
