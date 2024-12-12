import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig1 = {
  apiKey: "AIzaSyCtaB7EfPy5bpR_nTOLyexHkQmScbHZCes",
  authDomain: "mma-website-contact-from.firebaseapp.com",
  projectId: "mma-website-contact-from",
  storageBucket: "mma-website-contact-from.appspot.com",
  messagingSenderId: "212611549597",
  appId: "1:212611549597:web:67034bf040b54d41400774",
};

const firebaseConfig2 = {
  apiKey: "AIzaSyDUDhjRhvF-WLvgcH6zrOvfeIdC7yArTfg",
  authDomain: "player-details-c6ea7.firebaseapp.com",
  projectId: "player-details-c6ea7",
  storageBucket: "player-details-c6ea7.firebasestorage.app",
  messagingSenderId: "594573948283",
  appId: "1:594573948283:web:0c0ebf21ddf78a2370f9de",
  measurementId: "G-13JNTYGQLR",
};

// Initialize Firebase for the main app
const app1 =
  getApps().find((app) => app.name === "main-app") ||
  initializeApp(firebaseConfig1, "main-app");
const db = getFirestore(app1);

// Initialize Firebase for the player details app
const app2 =
  getApps().find((app) => app.name === "player-app") ||
  initializeApp(firebaseConfig2, "player-app");
const playerDb = getFirestore(app2);

export { db, playerDb };
