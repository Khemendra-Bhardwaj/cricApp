import React, { useState } from 'react';
import { app } from './firebase';
import { Route, Routes, Navigate } from 'react-router-dom';
import Arena  from './Arena'

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const auth = getAuth(app);

export default function Authentication() {
  const [user, setUser] = useState({ Email: '', Password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignUp = async () => {
    try {
      const person = await createUserWithEmailAndPassword(
        auth,
        user.Email,
        user.Password
      );
      console.log('User created successfully: ', person);
      setIsLoggedIn(true);
    } catch (e) {
      console.log(e);
      alert('Password Wrong, try again or login as guest ')
      // Render 404 or error page
    }
  };

  const handleSignIn = async () => {
    try {
      const person = await signInWithEmailAndPassword(
        auth,
        user.Email,
        user.Password
      );
      console.log('User signed in successfully: ', person);
      setIsLoggedIn(true);
    } catch (e) {
      console.log(e);
      alert('Password Wrong, try again or login as guest ')
      // Render 404 or error page
    }
  };

  const handleGuest = async ()=>{
    try{
      setIsLoggedIn(true) 
    }
    catch(e){
      console.log(e);
    }
  }

  if (isLoggedIn) {
    return (
      <Routes>
        <Route path="/search-player" element={<Arena />} />
        <Route path="/" element={<Navigate to="/search-player" />} />
      </Routes>
    );
  }

  return (
    <>
<div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
  <div className="w-full sm:max-w-md p-5 mx-auto">
    <h2 className="mb-12 text-center text-5xl font-extrabold">Welcome !</h2>
    
      <div className="mb-4">
        <label className="block mb-1" htmlFor="email">Email </label>
        <input id="email" type="text" name="email" className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" 
         onChange={(e) => { setUser({ Email: e.target.value, Password: user.Password }); }} />
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="password">Password</label>
        <input id="password" type="password" name="password" className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"    onChange={(e) => {
                  setUser({ Password: e.target.value, Email: user.Email });
                }}/>
      </div>
      
      <div className="mt-6">
        <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-sky-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-blue-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition" onClick={handleSignIn} >Sign In</button>
      </div>
      <div className="mt-6 text-center">
      <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-sky-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-blue-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition" onClick={handleSignUp} >Sign Up </button>
   
      </div>
      <div className="mt-6 text-center">
      <div className="mt-6 text-center">
      <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-sky-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-sky-700 active:bg-sky-700 focus:outline-none focus:border-sky-700 focus:ring focus:ring-sky-200 disabled:opacity-25 transition" onClick={handleGuest} > Guest </button>
   
      </div>
      </div>

  </div>
</div>

    </>
  );
}
