import React from 'react';
import { BoardData } from '../../types/BoardData';
import BoardColumn from '../BoardColumn/BoardColumn';
import styles from './BoardGrid.module.css';

type BoardGridProps = {
  data: BoardData;
};

export default function BoardGrid(props: BoardGridProps) {
  const { data } = props;
  const { columns } = data;
  return (
    <div className={styles.boardGrid}>
      {columns.map((column) => <BoardColumn key={`column-${column.id}`} {...column} />)}
    </div>
  );
}
