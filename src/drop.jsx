import React from 'react';
import {useDroppable} from '@dnd-kit/core';
​
export default function Droppable(props) {
  const {isOver, setNodeRef} = useDroppable({
    id: 'droppable',
  });
  const style = {
    color: isOver ? 'green' : undefined,
  };
  
  
  return (
    <div ref={setNodeRef} style={style}>
        <h2>drop here</h2>
      {props.children}
    </div>
  );
}

