import './App.css'
import Login, { loader as loginLoader, action as loginAction } from './login'
import Layout from "./layout"
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route} from "react-router-dom"
  import { initializeApp} from "firebase/app";
import Gallary from './gallary'
import ErrorPage from './error-page'
import { requireAuth } from './requiredauth'
import { Auth0Provider } from '@auth0/auth0-react';
//import Profile from './profile'
import { getAuth } from "firebase/auth";
import {  getDatabase} from "firebase/database";
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
import Home from './home'
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}   >
    <Route index element={<Home />} errorElement={<ErrorPage/>} />
   <Route path="login" element={<Login />}  action={loginAction}    errorElement={<ErrorPage/>} loader={loginLoader} />

            //protected routes nest page/rout in authpage
     
            <Route path="gallary" element={<Gallary />}  errorElement={<ErrorPage/>}
          loader={async () => {
            await requireAuth()
            return null}}
           
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