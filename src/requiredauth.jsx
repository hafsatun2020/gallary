import { redirect } from "react-router-dom"
import React from "react";
import { initializeApp} from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {  getDatabase, set, ref, update} from "firebase/database";
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

export async function requireAuth() {
 let isloggin = false
     await onAuthStateChanged(auth, (user) => {
      //console.log(user)
      
     if (user){    isloggin= true  }
   
    });
  console.log(  isloggin)

  if(!isloggin){
    throw redirect("/login")
  }
   
}

