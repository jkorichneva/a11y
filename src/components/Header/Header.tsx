import React from 'react';
import Image from 'next/image';
import logo from './logo.svg';
import user from './user.svg';
import styles from './Header.module.css';
import commonStyles from '../../Landing/Landing.module.css';
import t from '../../utils/translate';

type HeaderProps = {
  lang: 'RU' | 'EN';
};

function Header(props: HeaderProps): JSX.Element {
  const { lang } = props;
  return (
    <header className={styles.Header}>
      <Image src={logo} className={styles.Logo} alt="logo" />
      <h1 className={commonStyles.VHidden}>{t('museumName', lang)}</h1>
      <div className={styles.RightBlock}>
        <form role="search" className={styles.Form}>
          <input type="search" aria-label={t('search', lang)} className={styles.SearchInput} />
          <input type="submit" value="Search" className={styles.SearchSubmit} />
        </form>
        <nav aria-label={t('changeLang', lang)}>
          <span className={styles.LangButton}>
            <span aria-hidden="true">{lang === 'RU' ? 'RU' : 'EN'}</span>
            <span className={commonStyles.VHidden}>{lang === 'RU' ? 'Русский' : 'English'}</span>
          </span>
          <a
            className={styles.LangButton}
            href={lang === 'RU' ? '/en' : '/'}
            hrefLang={lang === 'RU' ? 'en' : 'ru'}
            aria-label={lang === 'RU' ? 'English' : 'Русский'}
          >
            {lang === 'RU' ? 'EN' : 'RU'}
          </a>
        </nav>
        <button type="button" aria-label={t('login', lang)} className={styles.LoginBtn}>
          <Image src={user} className={styles.Logo} alt="login" aria-hidden />
        </button>
      </div>
    </header>
  );
}

export default Header;
