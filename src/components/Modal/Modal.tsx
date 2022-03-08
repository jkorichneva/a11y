import React, { useRef, useEffect } from 'react';
import styles from './Modal.module.css';
import t from '../../utils/translate';

type ModalProps = {
  lang: 'RU' | 'EN';
  onClose: () => void;
};

export default function Modal({ lang, onClose }: ModalProps): JSX.Element {
  const modalRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    // @ts-ignore
    modalRef?.current?.focus();
  });

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  const handleButtonKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Tab') {
      // @ts-ignore
      modalRef?.current?.focus();
    }
  };

  return (
    <>
      <div className={styles.Overlay} />
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <div
        className={styles.Modal}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        ref={modalRef}
        onKeyDown={(event) => handleKeyDown(event)}
      >
        <h2>{t('enter', lang)}</h2>
        <button type="button" aria-label="Закрыть" className={styles.Close} onClick={onClose}>X</button>
        <form className={styles.Form}>
          <input type="text" placeholder="Логин" className={styles.Input} />
          <input type="password" placeholder="Пароль" className={styles.Input} />
          <button type="button" className={styles.Submit} onKeyDown={(event) => handleButtonKeyDown(event)}>Вход</button>
        </form>
      </div>
    </>
  );
}
