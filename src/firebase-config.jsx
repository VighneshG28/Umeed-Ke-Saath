// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHt-FnvTXcXZZmpAwDrBO_ACLYk36BHdE",
  authDomain: "blogproject-fafa3.firebaseapp.com",
  projectId: "blogproject-fafa3",
  storageBucket: "blogproject-fafa3.firebasestorage.app",
  messagingSenderId: "781654107216",
  appId: "1:781654107216:web:c30e740f3601e05ee45d55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);