// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwxd8P8cIvthudPZTsd3M39pOpGhSv8lo",
  authDomain: "ecommerce-vue-762ea.firebaseapp.com",
  projectId: "ecommerce-vue-762ea",
  storageBucket: "ecommerce-vue-762ea.appspot.com",
  messagingSenderId: "1078152608188",
  appId: "1:1078152608188:web:5a41f087f5795833c013b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);