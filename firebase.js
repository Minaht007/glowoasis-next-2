"use client"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ3-1fjhdeW8RJ41MYUMHNPAvKdbcqV1M",
  authDomain: "glowoasis-9e4ec.firebaseapp.com",
  projectId: "glowoasis-9e4ec",
  storageBucket: "glowoasis-9e4ec.appspot.com",
  messagingSenderId: "246551641396",
  appId: "1:246551641396:web:0e411f34f3bf5998527961",
  measurementId: "G-8TGNCZNG5D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth