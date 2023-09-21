import React from "react"
import { useLoaderData, Form, useNavigate } from "react-router-dom"
import LoginButton from'./loginbtn'
import { initializeApp} from "firebase/app";
import {  getDatabase, set, ref, update} from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import loginUser from './authpage'
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


  export function loader({ request }) {
    return new URL(request.url).searchParams.get("message") 
}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    // process this info however I wanted
    // pass the email and password to the loginUser function
    
    //console.log(email, password)
    return null
}
export default function Login() {
    const navigate= useNavigate()
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const message = useLoaderData()
    //const [error, setError] = React.useState(null)
function handleSubmit(e) {
       e.preventDefault()
      
    console.log(loginFormData)
let email = loginFormData.email
let password = loginFormData.password
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    set(ref(database, 'users/'+  user.uid),{
        email: email
    })
    alert ('user created')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert (errorMessage)
  });
   
   }


   function handlelogin(e) {
    e.preventDefault()

    let email = loginFormData.email
    let password = loginFormData.password
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const dt = new Date()
    const user = userCredential.user;
    update(ref(database, 'users/'+  user.uid),{
        last_login: dt
    })
    alert ('user logged in successfully!')
    navigate("/gallary", { replace: true })
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert (errorMessage)
  });

}

function handlelogin(e) {
    e.preventDefault()

    let email = loginFormData.email
    let password = loginFormData.password
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const dt = new Date()
    const user = userCredential.user;
    update(ref(database, 'users/'+  user.uid),{
        last_login: dt
    })
    alert ('user logged in successfully!')
    navigate("/gallary", { replace: true })
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert (errorMessage)
  });

}

   function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
           ...prev,
           [name]: value
      }))
    }
console.log(message)
    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            { message && <h2  className="red">{message}</h2> }
            {/*error && <h3 className="red">{error.message}</h3>*/}
            <Form method="post" className="login-form">
                <input
                    name="email"                  
                    type="email"
                    onChange={handleChange}
                    value={loginFormData.email}
                />
                <input
                    name="password"                    
                    type="password"
                    onChange={handleChange}
                    value={loginFormData.password}
                    
                />
                <button onClick={handleSubmit}>Sign Up</button>
                <button onClick={handlelogin}>Sign In</button>
            </Form>
        </div>
    )

}