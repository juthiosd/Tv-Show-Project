// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4aqbA3lLSo6-oVhV_bkzu9Mf9QBP-14g",
  authDomain: "tv-show-47d1c.firebaseapp.com",
  projectId: "tv-show-47d1c",
  storageBucket: "tv-show-47d1c.firebasestorage.app",
  messagingSenderId: "568734774616",
  appId: "1:568734774616:web:fc3546e678f85020a2a12d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app);
export default app