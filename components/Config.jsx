// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; //Added

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3Zjck6g0AtW3cXNX75SX6ZyEk62R6rbs",
  authDomain: "test-27b8f.firebaseapp.com",
  projectId: "test-27b8f",
  storageBucket: "test-27b8f.appspot.com",
  messagingSenderId: "295755309802",
  appId: "1:295755309802:web:7932c0d1265f01a44aed93",
  measurementId: "G-ZJMDPBLSFB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app); //Added
