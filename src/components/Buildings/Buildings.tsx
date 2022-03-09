import React from 'react';
import Image from 'next/image';
import buildingsList from './buildingsList';
import styles from './Buildings.module.css';

export default function Buildings() {
  return (
    <>
      {buildingsList.map((building) => (
        <div className={styles.Card}>
          <Image src={building.img} alt={building.alt} role="presentation" />
          <div className={styles.Header}>{building.header}</div>
          <div className={styles.Address}>{building.address}</div>
          <a
            href={building.link}
            className={styles.Link}
            aria-label={`Здание ${building.header}, подробнее`}
          >
            Подробнее
          </a>
        </div>
      ))}
    </>
  );
}
