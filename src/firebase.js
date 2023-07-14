import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAL5yFHMJLw8-fihiLhNn_diHRyQr7_eHs",
    authDomain: "bullsinvestment-44970.firebaseapp.com",
    projectId: "bullsinvestment-44970",
    storageBucket: "bullsinvestment-44970.appspot.com",
    messagingSenderId: "362902422605",
    appId: "1:362902422605:web:d26c8bf64eb1b44c348804"
  }; 

  initializeApp(firebaseConfig);
  
  export const db = getFirestore()
