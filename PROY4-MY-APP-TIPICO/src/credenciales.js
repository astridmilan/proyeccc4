// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO6C1ggiNSzqaJiHkX5dAwzWfHn6rrZV0",
  authDomain: "proy4-my-app-tipico.firebaseapp.com",
  projectId: "proy4-my-app-tipico",
  storageBucket: "proy4-my-app-tipico.appspot.com",
  messagingSenderId: "121330116327",
  appId: "1:121330116327:web:d6b7d08171b3d34eaba442",
  measurementId: "G-2EYT6ZGDS8"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;