import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6EalGxYRld8cOi9o3GJy5yebM9aMigo8",
  authDomain: "habit-tracker-2c04f.firebaseapp.com",
  projectId: "habit-tracker-2c04f",
  storageBucket: "habit-tracker-2c04f.appspot.com",
  messagingSenderId: "190637713455",
  appId: "1:190637713455:web:a7e5447873defac4dbbeda",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
