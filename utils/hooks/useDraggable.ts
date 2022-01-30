/* eslint-disable no-param-reassign */
import { DragEvent } from 'react';

type Effect = 'none' | 'move' | 'copy' | 'link';

export default function useDraggable(id: number, effect: Effect) {
  return {
    onDragStart: (event: DragEvent<HTMLDivElement>) => {
      if (event.dataTransfer) {
        event.dataTransfer.setData('application/my-app', id.toString());
        // @ts-ignore
        event.dataTransfer.effectAllowed = effect;
      }
    },
  };
}

export function useDropZone(id: number, effect: Effect) {
  return {
    onDragOver: (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      if (event.dataTransfer) {
        event.dataTransfer.dropEffect = effect;
      }
    },
    onDrop: (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      if (event.dataTransfer) {
        const taskId = event.dataTransfer.getData('application/my-app');
        if (event.target) {
          // @ts-ignore
          event.target.appendChild(document.getElementById(`task-${taskId}`));
        }
      }
    },
  };
}
