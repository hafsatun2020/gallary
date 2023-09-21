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
                <h2>drag me</h2>

      {props.children}
    </div>
  );
}

//It does however require you to be able to attach listeners and
// a ref to the DOM element that you would like to become draggable. You'll also need to provide a unique id attribute to all your draggable components. 