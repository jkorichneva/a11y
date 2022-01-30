import React from 'react';
import { Sizes } from '../../types/sizes';
import styles from './Header.module.css';

type HeaderProps = {
  children: JSX.Element | string;
  tag?: string;
  size?: Sizes;
};

export default function Header({ tag = 'h2', size = 'md', children }: HeaderProps): JSX.Element {
  const Tag = tag ?? 'h3';
  return (
  /**
     // @ts-ignore    */
    <Tag className={styles[`header__size_${size}`]}>
      {children}
    </Tag>
  );
}
