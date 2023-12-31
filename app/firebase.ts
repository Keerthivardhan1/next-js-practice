// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD62n_HQX-VUF6jP2YiS46m0WGSBz2Xvf8",
  authDomain: "test-app-62fcc.firebaseapp.com",
  projectId: "test-app-62fcc",
  storageBucket: "test-app-62fcc.appspot.com",
  messagingSenderId: "1011952364399",
  appId: "1:1011952364399:web:dab79e9c432669ab03d69a",
  measurementId: "G-DH9CK6LBDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);