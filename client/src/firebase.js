import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: `${process.env.FIREBASE_KEY}`,
  authDomain: "video-816d9.firebaseapp.com",
  projectId: "video-816d9",
  storageBucket: "video-816d9.appspot.com",
  messagingSenderId: "34431070357",
  appId: "1:34431070357:web:7c4b622a5e0789b86c6b9c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const provider=new GoogleAuthProvider();

export default app;