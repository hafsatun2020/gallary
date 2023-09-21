import React from "react"
import photos from "./photos";
import { Outlet, Link } from "react-router-dom"
import {
  DndContext, 
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import {SortableItem1 } from './sort';
import './App.css'
import { requireAuth } from './requiredauth'

export async function loader() {
       await requireAuth()
       return null

}
export default function Gallary() {
  const [items, setItems] = React.useState([1, 2, 3, 4, 5]);
  //const [items2, setItem2] = useState([1, 2, 3]);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <>
     <h1>DragNdrop images HERE</h1>
    <div className='container' >
      <DndContext 
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext 
        items={items}
        strategy={verticalListSortingStrategy}
      >
        {items.map(id => <SortableItem1 key={id} id={id} />)}
      </SortableContext>

      
    </DndContext>
    </div>
    </>
   
    
  );
  function handleDragEnd(event) {
    const {active, over} = event;
    
    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);
        
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
 
}