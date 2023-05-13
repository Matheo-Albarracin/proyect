import { getFirestore } from "firebase/firestore"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDupqYXr3RqA7xeiqfsBUWM8mDr5qrTKz0",
  authDomain: "gaming4u-23c54.firebaseapp.com",
  projectId: "gaming4u-23c54",
  storageBucket: "gaming4u-23c54.appspot.com",
  messagingSenderId: "550897783787",
  appId: "1:550897783787:web:aa634c648a10a9f7e2bfae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)