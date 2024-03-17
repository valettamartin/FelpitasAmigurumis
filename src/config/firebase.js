import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB3CstXvDZbuYVPJo7ZXUy3-6YnPZ17IoM",
  authDomain: "proyectoreactjs-coderhouse.firebaseapp.com",
  projectId: "proyectoreactjs-coderhouse",
  storageBucket: "proyectoreactjs-coderhouse.appspot.com",
  messagingSenderId: "407903337582",
  appId: "1:407903337582:web:574876d6aaa325de8bba7f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);