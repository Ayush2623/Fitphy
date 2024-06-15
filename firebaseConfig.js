import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCRpSJMIJjifQRGlZIuMXTOEyeEZ1q5Qvc",
    authDomain: "fitphybeta-1-509ce.firebaseapp.com",
    projectId: "fitphybeta-1-509ce",
    storageBucket: "fitphybeta-1-509ce.appspot.com",
    messagingSenderId: "913055558301",
    appId: "1:913055558301:web:7568a5d67cb289465e4274"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// ios 144161466815-k2i5gjno18kcd5u4psunv6bq0od01i3i.apps.googleusercontent.com
// android 144161466815-n11gde0neratj42379ig3n67s5kkfps3.apps.googleusercontent.com
