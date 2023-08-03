// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDxJ7ziIKJYjtZhKicFkOexGDdLj_LqCH0",
    authDomain: "kyc-verify-c584c.firebaseapp.com",
    projectId: "kyc-verify-c584c",
    storageBucket: "kyc-verify-c584c.appspot.com",
    messagingSenderId: "862243441260",
    appId: "1:862243441260:web:3a8a10ee108bf1e3472649",
    measurementId: "G-P59QS6MNXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;