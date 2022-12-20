// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhZZp5w_DU1zcWjj8Cw-2KREI4lLSiA7c",
  authDomain: "disneyplusclone-b1426.firebaseapp.com",
  projectId: "disneyplusclone-b1426",
  storageBucket: "disneyplusclone-b1426.appspot.com",
  messagingSenderId: "472848802072",
  appId: "1:472848802072:web:55bb26a098ecf257f17e6d",
  measurementId: "G-K7PCFGSTZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore();
const auth=getAuth(app);
const storage=getStorage();

export default db;
export {app,auth,GoogleAuthProvider,storage};