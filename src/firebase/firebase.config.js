// firebase.config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// 🔹 Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCyWFvzeOHAh11jacG5BtuQF-pI63d86D8",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// 🔹 Initialize Firebase
export const app = initializeApp(firebaseConfig);

// 🔹 Initialize and Export Auth
export const auth = getAuth(app);
