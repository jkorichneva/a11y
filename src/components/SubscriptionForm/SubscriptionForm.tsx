import React, { useState, useRef } from 'react';
import t from '../../utils/translate';
import styles from './SubscriptionForm.module.css';

type SubscriptionFormProps = {
  lang: 'RU' | 'EN';
};
export default function SubscriptionForm({ lang }: SubscriptionFormProps) {
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const submitRef = useRef(null);
  const [error, setError] = React.useState<null | string>(null);

  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (email && checked) {
      setSubmitted(true);
      // @ts-ignore
      submitRef?.current?.focus();
    } else if (!email) {
      setError(t('notEmpty', lang));
    } else if (!checked) {
      setError(t('notChecked', lang));
    }
  };
  if (submitted) {
    return (
      <div className={styles.Submitted} role="status" aria-live="polite" tabIndex={-1} ref={submitRef}>
        {t('subscribed', lang)}
      </div>
    );
  }

  return (
    <form className={styles.Form}>
      <div className={styles.InputForm}>
        <div className={error ? styles.InputBlockWithError : styles.InputBlock}>
          <input
            type="email"
            className={error ? styles.InputWithError : styles.Input}
            placeholder="E-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          {error && <span className={styles.Error}>{error}</span>}
        </div>
        <input
          type="submit"
          value={t('subscribe', lang)}
          className={styles.Submit}
          onClick={(event) => handleClick(event)}
        />
      </div>
      <input type="checkbox" id="agreement" checked={checked} onChange={() => setChecked(!checked)} className={styles.Checkbox} />
      <label htmlFor="agreement">{t('agree', lang)}</label>
    </form>
  );
}
