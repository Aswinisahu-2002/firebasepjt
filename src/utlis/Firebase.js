//! connect your project with firebase
import { initializeApp } from "firebase/app";
//! manage Firebase Authentication.
import { getAuth } from "firebase/auth";
//! access to Firebase Firestore, which is a NoSQL cloud database.
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBNzBFTNj0oPfm-lnVRTEUPGj8c8I2SCXc",
    authDomain: "reactfirebase456.firebaseapp.com",
    projectId: "reactfirebase456",
    storageBucket: "reactfirebase456.firebasestorage.app",
    messagingSenderId: "95331261830",
    appId: "1:95331261830:web:8df326c1ea1cead4936007",
    measurementId: "G-X8S8D8CN0W"
};
//! initializes your Firebase app
const app = initializeApp(firebaseConfig);

//! initialized app and exports it.
//! operations like adding, reading, updating, or deleting
export const db = getFirestore(app);
//!export Authentication
export const auth = getAuth(app);



