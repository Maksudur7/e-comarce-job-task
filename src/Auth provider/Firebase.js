// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHJi1_sCHBSs0WGbSFdMkfS0OjhVe3fL8",
  authDomain: "innovation-private-limited.firebaseapp.com",
  projectId: "innovation-private-limited",
  storageBucket: "innovation-private-limited.appspot.com",
  messagingSenderId: "583595727709",
  appId: "1:583595727709:web:abc27d90e76662dd57e6b4",
  measurementId: "G-LC8SLEQHD5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app