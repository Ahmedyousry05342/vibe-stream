// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAaNJ9zIaGWuZ2wHk_gU3lfVpDeN2Z1z8",
  authDomain: "netflix-gpt-rehan1.firebaseapp.com",
  projectId: "netflix-gpt-rehan1",
  storageBucket: "netflix-gpt-rehan1.firebasestorage.app",
  messagingSenderId: "699957261570",
  appId: "1:699957261570:web:593d4773eb779955713e1b",
  measurementId: "G-T016JR7V8Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Export the auth instance
export const auth = getAuth(app);
