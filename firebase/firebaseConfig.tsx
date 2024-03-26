// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBigqz3T9eimnownLqmGLf3uydsvRrN-cM",
    authDomain: "rotex-store.firebaseapp.com",
    projectId: "rotex-store",
    storageBucket: "rotex-store.appspot.com",
    messagingSenderId: "249448504097",
    appId: "1:249448504097:web:6621f3d4a9f0fc6e02bc60",
    measurementId: "G-3J7YTSKQT6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app)
const auth = getAuth(app)

export { fireDB, auth }