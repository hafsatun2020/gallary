import React from "react"
import { Outlet, Link } from "react-router-dom"

export default function Layout() {
  return (
    <>
    <h1>My Gallary</h1>
    <nav>
    
      <Link to="/">Home</Link>
      <Link to="gallary">Gallary</Link> 
      <Link to="login">Login</Link>
    </nav>
    <main>
      <Outlet />
      
    </main>
    <footer><h2>Created by Hafsat Nasidi</h2></footer>
    </>
  );
}