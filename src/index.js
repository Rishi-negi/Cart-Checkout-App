import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4pH0AROSBqOm9x02RDqUPmZaLp_qdS_U",
  authDomain: "cart-3b576.firebaseapp.com",
  projectId: "cart-3b576",
  storageBucket: "cart-3b576.appspot.com",
  messagingSenderId: "324339708960",
  appId: "1:324339708960:web:09daf405a620f89046b845"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
