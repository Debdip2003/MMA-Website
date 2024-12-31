import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMigt2aMrTEgsAPgX5_AGa5yzAjzm5LTk",
  authDomain: "website-4599c.firebaseapp.com",
  projectId: "website-4599c",
  storageBucket: "website-4599c.firebasestorage.app",
  messagingSenderId: "185870264715",
  appId: "1:185870264715:web:c8c3b9b0c5bdff2bee678e",
  measurementId: "G-963H7184WV",
};

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

// main db

const app =
  getApps().find((app) => app.name === "player-app") ||
  initializeApp(firebaseConfig, "player-app");
const maindb = getFirestore(app);

export { maindb, db };
