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

// main db

const app =
  getApps().find((app) => app.name === "player-app") ||
  initializeApp(firebaseConfig, "player-app");
const maindb = getFirestore(app);

export { maindb };
