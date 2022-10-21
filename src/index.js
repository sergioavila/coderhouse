import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDkE7gbr2IOVmY9WAXALba9DLUyy4erT5c",
  authDomain: "react-9fb95.firebaseapp.com",
  databaseURL: "https://react-9fb95.firebaseio.com",
  projectId: "react-9fb95",
  storageBucket: "react-9fb95.appspot.com",
  messagingSenderId: "24175025152",
  appId: "1:24175025152:web:62309c38e41c4d5062cce5"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
