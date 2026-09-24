import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3bSRpiZFkChvK7fr6qryZcEdFOUAskfs",
  authDomain: "sarkaripath-25391.firebaseapp.com",
  projectId: "sarkaripath-25391",
  storageBucket: "sarkaripath-25391.firebasestorage.app",
  messagingSenderId: "1087772749744",
  appId: "1:1087772749744:web:cd107e736b8e558f927075",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

