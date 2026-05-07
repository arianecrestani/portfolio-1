import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrsSgNMgQdqXzpqudHyCwHLSeMRO_904A",
  authDomain: "portfolio-c13b5.firebaseapp.com",
  projectId: "portfolio-c13b5",
  storageBucket: "portfolio-c13b5.appspot.com",
  messagingSenderId: "521710433039",
  appId: "1:521710433039:web:b7a3288553bb2e1df1447a",
  measurementId: "G-NPNLHM0JBL",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
export { app };
