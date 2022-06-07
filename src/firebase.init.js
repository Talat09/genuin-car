// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSMDcOeHu1YDuj0YClwa35Dz55_Gf2-Uw",
    authDomain: "genious-car-5322b.firebaseapp.com",
    projectId: "genious-car-5322b",
    storageBucket: "genious-car-5322b.appspot.com",
    messagingSenderId: "478817099751",
    appId: "1:478817099751:web:0c84fe6e25e23aad7d6742"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;