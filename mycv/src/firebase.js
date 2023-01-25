// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";


// TODO Bobby's web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0KltqUx02-g8WAqscUjsqlJEOIHflPgE",
    authDomain: "vitae-8a263.firebaseapp.com",
    projectId: "vitae-8a263",
    storageBucket: "vitae-8a263.appspot.com",
    messagingSenderId: "271457166926",
    appId: "1:271457166926:web:4632f3678310fa0312c51f"
};

// const firebaseConfig = {
//     apiKey: "AIzaSyC37349lG9o2FGFgOauYVTNw8kFdAqMHWc",
//     authDomain: "bobby-48db3.firebaseapp.com",
//     projectId: "bobby-48db3",
//     storageBucket: "bobby-48db3.appspot.com",
//     messagingSenderId: "345113816168",
//     appId: "1:345113816168:web:f620c0dc14783888aa1fdd"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default getFirestore();
