import React from 'react';
import { Column } from '../../types/BoardData';
import TaskCard from '../TaskCard/TaskCard';
import styles from './BoardColumn.module.css';
import { useDropZone } from '../../hooks/useDraggable';

export default function BoardColumn(column: Column) {
  const {
    name, backgroundColor, tasks, id,
  } = column;
  const { onDrop, onDragOver } = useDropZone(id, 'move');
  return (
    <div
      style={{ backgroundColor }}
      className={styles.boardColumn}
      onDrop={onDrop}
      onDragOver={onDragOver}
    >
      <div className={styles.boardColumnName}>
        {name}
      </div>
      {tasks.map((task) => (
        <TaskCard key={`task-${task.id}`} {...task} />
      ))}
    </div>
  );
}
