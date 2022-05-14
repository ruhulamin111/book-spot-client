// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA98uJ6RM4kWkHg2hq3wALmdWiirUuBAl4",
    authDomain: "the-book-spot-b08d5.firebaseapp.com",
    projectId: "the-book-spot-b08d5",
    storageBucket: "the-book-spot-b08d5.appspot.com",
    messagingSenderId: "147624739300",
    appId: "147624739300:web:f60870af55493e2e4d87f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;