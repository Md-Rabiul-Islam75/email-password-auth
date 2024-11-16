// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


// DONOT Share config in public
const firebaseConfig = {
  apiKey: "AIzaSyBsrs7gxHQ0YxlLz7-mtJZikB2AMaX1cys",
  authDomain: "email-password-auth-1ade4.firebaseapp.com",
  projectId: "email-password-auth-1ade4",
  storageBucket: "email-password-auth-1ade4.firebasestorage.app",
  messagingSenderId: "606200829696",
  appId: "1:606200829696:web:0139f3c87f4df9308a45e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);