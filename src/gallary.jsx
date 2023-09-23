import React from "react"
import { initializeApp} from "firebase/app";
import {  getDatabase, set, ref, update} from "firebase/database";
import { getAuth,onAuthStateChanged } from "firebase/auth";
import photos from "./photos";
import { Outlet, Link , redirect} from "react-router-dom"
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
const firebaseConfig = {
  apiKey: "AIzaSyCB45Z3J8n76d8DV3ppKCD8_UlPqhW3hGw",
  authDomain: "images-gallary-34146.firebaseapp.com",
  projectId: "images-gallary-34146",
  storageBucket: "images-gallary-34146.appspot.com",
  messagingSenderId: "770658229972",
  appId: "1:770658229972:web:6e73b150f22ee2540ea541",
  measurementId: "G-M1P8ZZDDTK"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export async function loader() {
  await requireAuth()
  return null

}
export default function Gallary() {
  const [userinfo, setUSer] = React.useState('')
  const [isloggin, setisloggin] = React.useState(false)
  const [items, setItems] = React.useState([1, 2, 3, 4, 5]);
  //const [items2, setItem2] = useState([1, 2, 3]);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

    
   
  React.useEffect( function (){
    onAuthStateChanged(auth, (user) => {
    console.log(user)
    
    if (user.uid){
     
      setisloggin(true)
       setUSer(user.uid)
    }
    console.log( userinfo, isloggin)
  });})
console.log( userinfo, isloggin)

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

  function render(){
    (
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
      </div>)
  }
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