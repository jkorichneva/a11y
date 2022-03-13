import React, { useState, useRef } from 'react';
import Image from 'next/image';
import logo from './logo.svg';
import user from './user.svg';
import styles from './Header.module.css';
import commonStyles from '../../Landing/Landing.module.css';
import t from '../../utils/translate';
import Modal from '../../components/Modal/Modal';
import Navigation from '../Navigation/Navigation';

type HeaderProps = {
  lang: 'RU' | 'EN';
};

function Header(props: HeaderProps): JSX.Element {
  const { lang } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const loginBtn = useRef(null);

  return (
    <header>
      <div className={styles.Header}>
        <Image src={logo} className={styles.Logo} alt="logo" role="presentation" />
        <h1 className={commonStyles.VHidden}>{t('museumName', lang)}</h1>
        <div className={styles.RightBlock}>
          <form role="search" className={styles.Form}>
            <input type="search" placeholder={t('search', lang)} className={styles.SearchInput} />
            <input type="submit" value={t('searchSubmit', lang)} className={styles.SearchSubmit} />
          </form>
          <nav aria-label={t('changeLang', lang)}>
            <div className={styles.LangButton}>
              <span aria-hidden="true">{lang === 'RU' ? 'RU' : 'EN'}</span>
              <span className={commonStyles.VHidden}>{lang === 'RU' ? 'Русский' : 'English'}</span>
            </div>
            <a
              className={styles.LangButton}
              href={lang === 'RU' ? '/a11y/en' : '/a11y/'}
              hrefLang={lang === 'RU' ? 'en' : 'ru'}
              aria-label={lang === 'RU' ? 'English' : 'Русский'}
            >
              {lang === 'RU' ? 'EN' : 'RU'}
            </a>
          </nav>
          <button
            type="button"
            aria-label={t('login', lang)}
            className={styles.LoginBtn}
            aria-haspopup
            onClick={() => setModalOpen(true)}
            ref={loginBtn}
          >
            <Image src={user} className={styles.Logo} alt="login" aria-hidden />
          </button>
        </div>
        {modalOpen && (
        <Modal
          lang={lang}
          onClose={() => {
            setModalOpen(false);
            // @ts-ignore
            loginBtn?.current?.focus();
            document.body.style.overflow = 'auto';
          }}
        />
        )}
      </div>
      <Navigation lang={lang} />
    </header>
  );
}

export default Header;
