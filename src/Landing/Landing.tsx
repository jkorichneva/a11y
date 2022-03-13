import React from 'react';
import Header from '../sections/Header/Header';
import Exhibitions from '../sections/Exhibitions/Exhibitions';
import Museum from '../sections/Museum/Museum';
import styles from './Landing.module.css';
import t from '../utils/translate';
import Excursions from '../sections/Excursions/Excursions';
import Footer from '../sections/Footer/Footer';
import Video from '../sections/Video/Video';
import Carousel from '../sections/Carousel/Carousel';

type LandingProps = {
  lang: 'RU' | 'EN';
};

function Landing(props: LandingProps): JSX.Element {
  const { lang } = props;
  return (
    <>
      <div className={styles.Landing}>
        <a href="#main" className={styles.SkipLink}>{t('skipLink', lang)}</a>
        <Header lang={lang} />
        <main id="main">
          <Carousel lang={lang} />
          <Exhibitions lang={lang} />
          <Museum lang={lang} />
          <Video lang={lang} />
          <Excursions lang={lang} />
        </main>
      </div>
      <Footer lang={lang} />
    </>
  );
}

export default Landing;
