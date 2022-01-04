// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO1qTfCippRCoJFPzjDMTX-OD-1j6jgTE",
  authDomain: "photogram-71f15.firebaseapp.com",
  projectId: "photogram-71f15",
  storageBucket: "photogram-71f15.appspot.com",
  messagingSenderId: "665201241192",
  appId: "1:665201241192:web:49ab191846fb0a34fd9fdd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

const storage = getStorage();
const projectStorage = ref(storage);
const projectFirestore = getFirestore();

export { projectStorage, projectFirestore, app };
