// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCYFXg4WfKJYwlD0lUOALpJksSKYHDYx-I",
  authDomain: "carefinder-68614.firebaseapp.com",
  projectId: "carefinder-68614",
  storageBucket: "carefinder-68614.appspot.com",
  messagingSenderId: "433599252416",
  appId: "1:433599252416:web:a43ffb15a78b8fb7fcea25",
  measurementId: "G-W3C0FWXDCZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
logEvent(analytics, "notification_received");


export const auth = getAuth();

// Firestore
export const db = getFirestore();

// Google Auth Provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

// Sign in with Google
export const signInWithGoogle = () => signInWithPopup(getAuth(), provider);

// // Sign up with Google
// export const createUserWithEmailAndPassword = () => signInWithPopup(getAuth(), provider);

// Sign out
export const signOut = () => getAuth().signOut();

// export default app;