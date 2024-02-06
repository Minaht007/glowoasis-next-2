"use client"
import React, { createContext, useContext, useState } from 'react';
import SignIn from "../signIn/signIn.jsx"
import SignUp from "../signUp/signUpDt.jsx"

export const UserContext = createContext();

export const UserProvider = ({ children }) => { 

  const [user, setUser] = useState("");

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};



// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();


// function logIn(email, password) {

//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {

//       const user = userCredential.user;
//       console.log("User logged in:", user.uid);
//     })
//     .catch((error) => {

//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.error("Log in failed:", errorCode, errorMessage);
//     });
// }