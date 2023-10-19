// firebase.js

import firebase from 'firebase/app';
import 'firebase/database';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAijypAlDOobw1Bt6zaal0xc02RJsFYjpA",
    authDomain: "unitypulse-c13ae.firebaseapp.com",
    databaseURL: "https://unitypulse-c13ae-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "unitypulse-c13ae",
    storageBucket: "unitypulse-c13ae.appspot.com",
    messagingSenderId: "4961422570",
    appId: "1:4961422570:web:7f13c12ce252b1fcf31b93",
    measurementId: "G-567WNHZJH1"
  };
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = app.database();

export default database;
