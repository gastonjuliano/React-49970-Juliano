// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyASvjVHeutfwFcTeUII7W9A6T2ZNhNgKzo",
    authDomain: "reactjs-juliano-49970.firebaseapp.com",
    projectId: "reactjs-juliano-49970",
    storageBucket: "reactjs-juliano-49970.appspot.com",
    messagingSenderId: "224757360045",
    appId: "1:224757360045:web:11712c5fd86a840a9e2d24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);