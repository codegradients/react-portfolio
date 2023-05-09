import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4h1j5qZn-8fXSwM3FaPdfX0vSg2HxPjg",
  authDomain: "react-portfolio-awais.firebaseapp.com",
  projectId: "react-portfolio-awais",
  storageBucket: "react-portfolio-awais.appspot.com",
  messagingSenderId: "580971124933",
  appId: "1:580971124933:web:951b759a124682f8efb8ac",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
