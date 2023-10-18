// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDIP8DO8X3XwoJvbHRnOb1NlXlP-MVoAk",
  authDomain: "entrega-final-2ee78.firebaseapp.com",
  projectId: "entrega-final-2ee78",
  storageBucket: "entrega-final-2ee78.appspot.com",
  messagingSenderId: "906523547495",
  appId: "1:906523547495:web:436494e129ce6fb5cc81c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)