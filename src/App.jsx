import { useState } from 'react'
import './App.css'
import Login, { loader as loginLoader, action as loginAction } from './login'
import Layout from "./layout"
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route, redirect} from "react-router-dom"

import Gallary, {loader as gallloader} from './gallary'
import AuthRequired from './authpage'
import ErrorPage from './error-page'
import { requireAuth } from './requiredauth'
import { Auth0Provider } from '@auth0/auth0-react';
//import Profile from './profile'
import Home from './home'
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}   >
    <Route index element={<Home />} errorElement={<ErrorPage/>} />
   <Route path="login" element={<Login />}  action={loginAction}    errorElement={<ErrorPage/>} loader={loginLoader} />

            //protected routes nest page/rout in authpage
     
            <Route path="gallary" element={<Gallary />}  errorElement={<ErrorPage/>}
          loader={gallloader}
           
            />
     
          
    </Route>
 
))

function App() {
  return (
    <Auth0Provider
        domain="dev-ypgwscppcwwtdht8.us.auth0.com"
        clientId="IgYSVjjNrf8IZypFGCAY9D8KEAgbJPui"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
  >
     <RouterProvider router={router} />
  </Auth0Provider> 
   
  )
}

export default App
