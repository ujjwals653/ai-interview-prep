import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDibTZBuQY2ppqTbAgrntbFedHgzxq3izQ",
  authDomain: "interviewpath-c5e40.firebaseapp.com",
  projectId: "interviewpath-c5e40",
  storageBucket: "interviewpath-c5e40.firebasestorage.app",
  messagingSenderId: "201612013141",
  appId: "1:201612013141:web:9d9abe8c687b880dbeaedc",
  measurementId: "G-DW64398XHY"
};

// Initialize Firebase
const app = !getApps() ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);