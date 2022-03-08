import React from 'react';
import styles from './Excursions.module.css';
import t from '../../utils/translate';

type ExcursionsProps = {
  lang: 'RU' | 'EN';
};

export default function Excursions({ lang }: ExcursionsProps) {
  return (
    <section aria-labelledby="excursions-sec-h" id="visitors" className={styles.Excursions}>
      <h2 id="excursions-sec-h" className={styles.Header}>{t('excursions', lang)}</h2>
      <div className={styles.Text}>
        <p>
          С 1 июля вы можете присоединиться к нашим виртуальным мероприятиям — экскурсиям и лекциям для взрослых и детей, оплатив участие на сайте. Встречи будут проходить в прямом эфире на платформе Zoom; предусмотрен формат живого общения с возможностью задавать вопросы экскурсоводу (лектору).
        </p>
        <a href="/a11y/online">Подробнее</a>

        <p>
          Мы будем благодарны за любое
          {' '}
          <a href="/a11y/donate/">пожертвование</a>
          . Все поступившие средства будут направлены на организацию онлайн-проектов для наших посетителей.
        </p>
      </div>
    </section>
  );
}
