import React from 'react';
import Image from 'next/image';
import buildingsList from './buildingsList';
import styles from './Buildings.module.css';

export default function Buildings() {
  return (
    <>
      {buildingsList.map((building, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className={styles.Card} key={index}>
          <Image src={building.img} alt={building.alt} role="presentation" />
          <div className={styles.Header}>{building.header}</div>
          <div className={styles.Address}>{building.address}</div>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            href="#"
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
