// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtaB7EfPy5bpR_nTOLyexHkQmScbHZCes",
  authDomain: "mma-website-contact-from.firebaseapp.com",
  projectId: "mma-website-contact-from",
  storageBucket: "mma-website-contact-from.appspot.com",
  messagingSenderId: "212611549597",
  appId: "1:212611549597:web:67034bf040b54d41400774",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
