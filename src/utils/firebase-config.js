//imported from firebase
import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth' //import auth and remove analytics


const firebaseConfig = {
  apiKey: "AIzaSyC2AVQu_MDX-aW690zbzLqNdk8VHZZNYiE",
  authDomain: "ehunt-e0fff.firebaseapp.com",
  projectId: "ehunt-e0fff",
  storageBucket: "ehunt-e0fff.appspot.com",
  messagingSenderId: "25399538779",
  appId: "1:25399538779:web:2311c2f08ee5819b1e3b7e",
  measurementId: "G-CCTM085L9F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app)