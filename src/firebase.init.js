// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBalWRPCvb88WQH5QGK2C2jBoPfVNUuKcM",
  authDomain: "easy-e-commerce-3a784.firebaseapp.com",
  projectId: "easy-e-commerce-3a784",
  storageBucket: "easy-e-commerce-3a784.appspot.com",
  messagingSenderId: "404267344435",
  appId: "1:404267344435:web:3b8ae3b97722f1fafc3946"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
export default auth;