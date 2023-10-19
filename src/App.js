import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Articles from './Articles';
import Footer from './Footer';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'; 

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


function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Articles />
      <Footer />
    </div>
  );
}


const handleRegistration = async (email, password) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    // User registered successfully.
    // You can perform additional actions here (e.g., saving user data to a database).
  } catch (error) {
    // Handle registration errors.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage);
  }
};

const handleLogin = async (email, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    // User logged in successfully.
    // You can navigate to a dashboard or perform other actions here.
  } catch (error) {
    // Handle login errors.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage);
  }
};


export default App;
