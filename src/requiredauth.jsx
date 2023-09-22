import { redirect, useNavigate } from "react-router-dom"
import React from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";


export  function requireAuth() {
    const auth = getAuth();
  
 onAuthStateChanged(auth, (user) => {
  if (!user) {
    throw redirect("/login?message=You must log in first")
  } 
  return user
});
   
}

