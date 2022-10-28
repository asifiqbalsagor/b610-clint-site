// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA9qmV5UNBblXjCS-ZPxyn9U7cNnB8UhU",
  authDomain: "web-development-courses-client.firebaseapp.com",
  projectId: "web-development-courses-client",
  storageBucket: "web-development-courses-client.appspot.com",
  messagingSenderId: "623284827935",
  appId: "1:623284827935:web:551ec216fed258b4d8e22a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;