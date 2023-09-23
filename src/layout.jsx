import React from "react"
import { Outlet, Link , redirect} from "react-router-dom"
import loginUser from './authpage'
import { initializeApp} from "firebase/app";
import {  getDatabase, set, ref, update} from "firebase/database";

import { getAuth, signOut, createUserWithEmailAndPassword,onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
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

export default function Layout() {

  function handlelogout(e) {
    const auth = getAuth();
    e.preventDefault()
    signOut(auth)
    alert ('user logged out successfully!')
  }
  return (
    <>
   
    <nav>
    <h1>My Gallery</h1>
    <div className="links">
    <Link to="/">Home</Link>
      <Link to="gallary">Gallery</Link> 
      <Link to="login">login</Link> 
      <button onClick={handlelogout}>logout</button>
    </div>
     
    </nav>
    <main>
      <Outlet />
      
    </main>
    <footer><h2>Created by Hafsat Nasidi</h2></footer>
    </>
  );

}
  
