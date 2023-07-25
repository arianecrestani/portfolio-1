// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP4LQ_rWw6TG3RCbcdKcYdTb1Rv4uHuPQ",
  authDomain: "portfolio-fffba.firebaseapp.com",
  projectId: "portfolio-fffba",
  storageBucket: "portfolio-fffba.appspot.com",
  messagingSenderId: "637438110079",
  appId: "1:637438110079:web:cac87780b6596a1f32124a"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
export { app };