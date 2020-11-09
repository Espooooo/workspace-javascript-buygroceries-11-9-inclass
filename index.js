// Import stylesheets
import "./style.css";

// Import javascript files
import "./js/add-element.js";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from "firebaseui";

//  Code for later database connection Please ignore.

// Add Firebase project configuration object here
const firebaseConfig = {
  apiKey: "AIzaSyA9NUt5Y_407FnXM9a2EFFAcAMfT2dY-EE",
  authDomain: "grocery-18f36.firebaseapp.com",
  databaseURL: "https://grocery-18f36.firebaseio.com",
  projectId: "grocery-18f36",
  storageBucket: "grocery-18f36.appspot.com",
  messagingSenderId: "663017173789",
  appId: "1:663017173789:web:55de32c09f6636ac49a7f4",
  measurementId: "G-MTCFE720FV"
};

firebase.initializeApp(firebaseConfig);

// Save the list to database
