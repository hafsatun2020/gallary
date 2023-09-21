import React from "react"
import {  PhotoAlbum } from "react-photo-album";
import photos from "./photos";
import "./App.css";




export default function Home() {
    const photo = photos.map(photo => {console.log(photo.src); return <div><img src={photo.src} alt="" width={photo.width} height={photo.height}/></div> })
    console.log(photo)
  return (
    <>
   
   
    <main className="container">
    
    {photo}
    </main>
    </>
  );
}