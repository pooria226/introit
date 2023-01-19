// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp3SKA5TGcRdIgz-ZnwpGLRY7BPw5sCAI",
  authDomain: "techtalents-50df2.firebaseapp.com",
  projectId: "techtalents",
  storageBucket: "techtalents.appspot.com",
  messagingSenderId: "593810674709",
  appId: "1:593810674709:web:1e12c80ab4c63e1ea46a1c",
  measurementId: "G-YF5TTP52NG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);