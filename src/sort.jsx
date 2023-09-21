import React from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import p1 from "./images/p1.jpg" 
import p2 from "./images/2.jpg" 
import photos from "./photos";

export function SortableItem1(props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: props.id});
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {/* ... */}
      <img src={p1}alt="image1" width={300} height={300}/>
      <h2>{props.id}</h2>
    </div>
  );
}

