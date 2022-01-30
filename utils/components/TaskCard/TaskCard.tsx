import React from 'react';
import { Task } from '../../types/BoardData';
import useDraggable from '../../hooks/useDraggable';

export default function TaskCard(task: Task): JSX.Element {
  const { header, id } = task;
  const { onDragStart } = useDraggable(id, 'move');

  return (
    <div draggable onDragStart={onDragStart} id={`task-${id}`}>
      {header}
    </div>
  );
}
