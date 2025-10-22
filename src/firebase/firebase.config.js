// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyWFvzeOHAh11jacG5BtuQF-pI63d86D8",
  authDomain: "toytopia-store.firebaseapp.com",
  projectId: "toytopia-store",
  storageBucket: "toytopia-store.firebasestorage.app",
  messagingSenderId: "998103810927",
  appId: "1:998103810927:web:4259f85c47dc6a63979e9a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
