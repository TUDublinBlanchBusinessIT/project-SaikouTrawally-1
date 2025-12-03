// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your Firebase config (correct from your screenshot)
const firebaseConfig = {
  apiKey: "AIzaSyDWuDnI3X8Q6MGF-5801smXhRXirJW1jj0",
  authDomain: "mobileappsca2.firebaseapp.com",
  projectId: "mobileappsca2",
  storageBucket: "mobileappsca2.appspot.com",
  messagingSenderId: "1036194951674",
  appId: "1:1036194951674:web:803ee9be8fe8dfefc2b443",
  measurementId: "G-S33C106QE6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore instance
export const db = getFirestore(app);
