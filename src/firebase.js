// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// this you can get in project settings
const firebaseConfig = {
    apiKey: "AIzaSyDp-ErfrVKOOFx9wgYDA9iAvClCZG8kFxU",
    authDomain: "react-chat-firebase-8eafd.firebaseapp.com",
    projectId: "react-chat-firebase-8eafd",
    storageBucket: "react-chat-firebase-8eafd.appspot.com",
    messagingSenderId: "391554119679",
    appId: "1:391554119679:web:35ecaccf812483f74d19ca",
    measurementId: "G-9YY5QNWPX1"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);