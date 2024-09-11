// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyCl7TpsBHhqHnN_rurqj7AVXqTSe_mMgl8",
  authDomain: "chatting-app-firebase-3acc6.firebaseapp.com",
  projectId: "chatting-app-firebase-3acc6",
  storageBucket: "chatting-app-firebase-3acc6.appspot.com",
  messagingSenderId: "363034261367",
  appId: "1:363034261367:web:23550de8561a712258d372",
  measurementId: "G-C388M88J6V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default database