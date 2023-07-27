// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLth7GRN1vNraSVREpCJRVQqG4xf-5wrI",
  authDomain: "mobi-e551e.firebaseapp.com",
  projectId: "mobi-e551e",
  storageBucket: "mobi-e551e.appspot.com",
  messagingSenderId: "1097023762859",
  appId: "1:1097023762859:web:6272bc8753dcf6653522ee",
  measurementId: "G-2V942C81PE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);