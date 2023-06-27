import React, {useState} from 'react'
import {app} from './firebase'
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
const auth = getAuth(app)


export default function Authentication() {
  
  const [user, setUser] = useState({Email:'',Password:''})

  const handleSignUp= async ()=>{
      try{
      const person =  await createUserWithEmailAndPassword(auth, user.Email, user.Password)
      console.log('user created Successfully ', person);
      }
      catch(e){ console.log(e); }
    }
    
    const handleSignIn= async ()=>{
      try{
      const person =  await signInWithEmailAndPassword(auth, user.Email, user.Password)
      console.log('user signed in  Successfully ', person);
      }
      catch(e){ console.log(e); }
    }
  
return (
  <>
  Email <input type='email'  onChange={  (e)=>{ setUser( {Email:e.target.value, Password:user.Password} ) }   } />
  <br /> 
  Password <input type='password'    onChange={  (e)=>{ setUser( {Password:e.target.value , Email: user.Email} ) }   } />
  <br /> 

  <button onClick={handleSignUp}> SignUp </button>
  <br /> 
  <button onClick={handleSignIn}> SignIn </button>
  
  </>
)

}
