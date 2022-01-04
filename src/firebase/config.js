import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO1qTfCippRCoJFPzjDMTX-OD-1j6jgTE",
  authDomain: "photogram-71f15.firebaseapp.com",
  projectId: "photogram-71f15",
  storageBucket: "photogram-71f15.appspot.com",
  messagingSenderId: "665201241192",
  appId: "1:665201241192:web:49ab191846fb0a34fd9fdd",
};

initializeApp(firebaseConfig);
const projectStorage = getStorage();
const projectFirestore = getFirestore();

export { projectStorage, projectFirestore };
