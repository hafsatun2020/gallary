import { redirect, useNavigate } from "react-router-dom"
import React from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";


export async function requireAuth() {
    const auth = getAuth();
    let islogin = false
onAuthStateChanged(auth, (user) => {
  if (user) {
   
    const uid = user.uid;

    islogin = auth
    

        // ...
  } else {
    // User is signed out
    // ...
    islogin = auth
    throw redirect("/login?message=You must log in first")
  }
});
   
}

