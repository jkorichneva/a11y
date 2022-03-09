import React from 'react';
import styles from './Footer.module.css';
import t from '../../utils/translate';
import SubscriptionForm from '../../components/SubscriptionForm/SubscriptionForm';

type FooterProps = {
  lang: 'RU' | 'EN';
};

export default function Footer({ lang }: FooterProps): JSX.Element {
  return (
    <footer className={styles.Footer}>
      <div className={styles.InnerFooter}>
        <div className={styles.Col}>
          <a href="/visitors-special">{t('visitorsSpecial', lang)}</a>
          <a href="/tickets">{t('tickets', lang)}</a>
          <a href="/corruption">{t('corruption', lang)}</a>
          <div className={styles.Social}>
            <h3>{t('social', lang)}</h3>
            <a href="mailto:museum@museum.ru" aria-label={t('email', lang)} className={styles.IconMail} />
            <a href="/tg" aria-label={t('tg', lang)} className={styles.IconTg} />
            <a href="/fb" aria-label={t('fb', lang)} className={styles.IconFb} />
          </div>
        </div>
        <div className={styles.Col}>
          <h3 id="form-header">{t('subscription', lang)}</h3>
          <SubscriptionForm lang={lang} headerId="form-header" />
        </div>
      </div>
    </footer>
  );
}
