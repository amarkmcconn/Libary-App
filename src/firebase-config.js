import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUKmYiS0zAzGUJY98Xxakv5YwknvHihvs",
  authDomain: "libary-app-52d82.firebaseapp.com",
  projectId: "libary-app-52d82",
  storageBucket: "libary-app-52d82.appspot.com",
  messagingSenderId: "924368485159",
  appId: "1:924368485159:web:e8c9c6dc50719741ee8702",
  measurementId: "G-TB9RPQ38DZ"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)