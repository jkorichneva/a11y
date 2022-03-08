import React from 'react';
import Image from 'next/image';
import styles from './Card.module.css';
import { CardType } from '../cards';

export default function Card(card: CardType): JSX.Element {
  const {
    header, description, date, link, src, alt,
  } = card;
  return (
    <li className={styles.Card}>
      <Image src={src} alt={alt} />
      <h3 className={styles.Header}>{header}</h3>
      <div className={styles.Date}>{date}</div>
      <span className={styles.Description}>{description}</span>
      <a href="/buy" className={styles.Link}>{link}</a>
    </li>
  );
}
