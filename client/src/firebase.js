// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-6746e.firebaseapp.com",
  projectId: "mern-blog-6746e",
  storageBucket: "mern-blog-6746e.appspot.com",
  messagingSenderId: "667271622028",
  appId: "1:667271622028:web:e53dfa90fe9de7d216baa9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
