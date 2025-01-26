import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnP2ssSFbF5IxPSb7-191vPG4gkhAYmwE",
  authDomain: "mchacks12-b6d43.firebaseapp.com",
  projectId: "mchacks12-b6d43",
  storageBucket: "mchacks12-b6d43.firebasestorage.app",
  messagingSenderId: "822925817216",
  appId: "1:822925817216:web:5482c38f1d77e99db73d65",
  measurementId: "G-82045NFE1F"
};


const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export { firestore } 