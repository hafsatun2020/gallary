import { redirect, useNavigate } from "react-router-dom"
import React from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";



export async function requireAuth() {
  const isLoggedIn = false
    const auth = getAuth();
    console.log(auth);


onAuthStateChanged(auth, (user) => {
  if (user) {
   
    const uid = user.uid;    
    isLoggedIn = true         // ...
  } else {
    // User is signed out
    // ...
    throw redirect("/login?message=You must log in first")
  }
});
   
}

