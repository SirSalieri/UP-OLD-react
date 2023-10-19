import React, { useEffect, useState } from 'react';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'; 
import './app components/validationUtils';
import './app components/MyComponents';

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

firebase.initializeApp(firebaseConfig);

function App() {
  const isEmailValid = (email) => {
    // Implement email validation logic (e.g., using regular expressions)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };
  
  const isPasswordValid = (password) => {
    // Implement password validation logic (e.g., length, complexity)
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);
  
    return (
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasSpecialChar
    );
  };
  
  

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    const email = e.target.email.value;
    const password = e.target.password.value;
  
    // Validate email and password using the custom validation functions
    if (!isEmailValid(email) || !isPasswordValid(password)) {
      // Show validation error messages
      return;
    }
  
    // Rest of your code for registration and data storage
    // ...
  };
  


  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={handleEmailChange}
          />
          {emailError && <p className="error">{emailError}</p>}
  
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={handlePasswordChange}
          />
          {passwordError && <p className="error">{passwordError}</p>}
  
          <button type="submit">SIGN UP</button>
        </form>
      </header>
    </div>
  );
}

export default App;
