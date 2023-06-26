// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMMvD2UrRxZW1AwJ0sLRsKXSoR--Qg-rs",
  authDomain: "twitter-clone-3a8e6.firebaseapp.com",
  projectId: "twitter-clone-3a8e6",
  storageBucket: "twitter-clone-3a8e6.appspot.com",
  messagingSenderId: "313019767670",
  appId: "1:313019767670:web:220bcab265f5c5281fb857",
  measurementId: "G-EN07P53KSE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
