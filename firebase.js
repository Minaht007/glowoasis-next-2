"use client";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getDatabase, ref, set } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQ3-1fjhdeW8RJ41MYUMHNPAvKdbcqV1M",
  authDomain: "glowoasis-9e4ec.firebaseapp.com",
  projectId: "glowoasis-9e4ec",
  storageBucket: "glowoasis-9e4ec.appspot.com",
  messagingSenderId: "246551641396",
  appId: "1:246551641396:web:0e411f34f3bf5998527961",
  measurementId: "G-8TGNCZNG5D",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

// export default auth;
// export default db;
