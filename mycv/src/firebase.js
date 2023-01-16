// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0KltqUx02-g8WAqscUjsqlJEOIHflPgE",
    authDomain: "vitae-8a263.firebaseapp.com",
    projectId: "vitae-8a263",
    storageBucket: "vitae-8a263.appspot.com",
    messagingSenderId: "271457166926",
    appId: "1:271457166926:web:4632f3678310fa0312c51f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default getFirestore();