import React from 'react';
import Image from 'next/image';
import styles from './Card.module.css';
import t from '../../utils/translate';
import { CardType } from '../../sections/Exhibitions/cards';

export default function Card(card: CardType): JSX.Element {
  const {
    header, description, date, link, src, alt, lang,
  } = card;
  return (
    <li className={styles.Card}>
      <Image src={src} alt={alt} role="presentation" />
      <h3 className={styles.Header}>{header}</h3>
      <div className={styles.Date}>{date}</div>
      <span className={styles.Description}>{description}</span>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#" className={styles.Link} aria-label={`${t('buyTicket', lang)} ${header}`}>{link}</a>
    </li>
  );
}
