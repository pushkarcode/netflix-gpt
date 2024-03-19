// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQQlMFsbLdHkiO1JK4ci2o81SX8tjdrKw",
  authDomain: "netflixgpt-5a96a.firebaseapp.com",
  projectId: "netflixgpt-5a96a",
  storageBucket: "netflixgpt-5a96a.appspot.com",
  messagingSenderId: "344532297932",
  appId: "1:344532297932:web:8273702b988ea2d3253a69",
  measurementId: "G-83X5RXTD6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
