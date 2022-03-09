import React from 'react';
import Image from 'next/image';
import styles from './Card.module.css';
import { CardType } from '../../sections/Exhibitions/cards';

export default function Card(card: CardType): JSX.Element {
  const {
    header, description, date, link, src, alt,
  } = card;
  return (
    <li className={styles.Card}>
      <Image src={src} alt={alt} role="presentation" />
      <h3 className={styles.Header}>{header}</h3>
      <div className={styles.Date}>{date}</div>
      <span className={styles.Description}>{description}</span>
      <a href="/buy" className={styles.Link} aria-label={`Купить билет на выставку ${header}`}>{link}</a>
    </li>
  );
}
