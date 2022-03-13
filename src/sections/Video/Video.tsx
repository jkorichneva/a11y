import React from 'react';
import styles from './Video.module.css';
import t from '../../utils/translate';

type VideoProps = {
  lang: 'RU' | 'EN';
};

export default function Video({ lang }: VideoProps) {
  return (
    <section aria-labelledby="video-sec-h" id="online">
      <h2 id="video-sec-h" className={styles.Header}>{t('online', lang)}</h2>
      <div className={styles.VideoContainer}>
        <iframe
          title={t('webinarTitle', lang)}
          width="100%"
          height="auto"
          src="https://www.youtube.com/embed/ja52OM6WfV0"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope;"
          allowFullScreen
        />
      </div>
    </section>
  );
}
