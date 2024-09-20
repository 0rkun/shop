import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDt3D1RNEvPtRhlx8F6bh-VU9JtehN5A3g",
  authDomain: "shopnew-32b1a.firebaseapp.com",
  projectId: "shopnew-32b1a",
  storageBucket: "shopnew-32b1a.appspot.com",
  messagingSenderId: "283192393778",
  appId: "1:283192393778:web:a352e1e8960cb207f2fc2b"
};

const firebaseApp = initializeApp(firebaseConfig);


export default firebaseApp;