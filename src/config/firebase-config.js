// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwVwG055fB66XTJwquGpFXTC7HgGpcfoM",
  authDomain: "hateelao-auth.firebaseapp.com",
  projectId: "hateelao-auth",
  storageBucket: "hateelao-auth.appspot.com",
  messagingSenderId: "947496918968",
  appId: "1:947496918968:web:02aab058acaf5fffd2394d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
