import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA7cBsIQCkGspYDbkU3L6T7FXerZz-64UU",
  authDomain: "clone-eb2d6.firebaseapp.com",
  projectId: "clone-eb2d6",
  storageBucket: "clone-eb2d6.appspot.com",
  messagingSenderId: "110055833321",
  appId: "1:110055833321:web:81e7104dcd373a7c0f7a78",
  measurementId: "G-9QVSC8KRLX"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth }