import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDva5Ha7kcwGuOktavxtsc82J7rUl01WsM",
  authDomain: "magazine-d5194.firebaseapp.com",
  projectId: "magazine-d5194",
  storageBucket: "magazine-d5194.appspot.com",
  messagingSenderId: "943858964779",
  appId: "1:943858964779:web:b375f1f448901432f94d6e",
  measurementId: "G-6JZCGPERX4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;