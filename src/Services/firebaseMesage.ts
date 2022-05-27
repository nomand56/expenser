// import firebase from 'firebase';
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyA5dj7thDXPbF0emv7RVoBkrheXV_Azu1o",
    authDomain: "expense-tracker-app-bd9a1.firebaseapp.com",
    projectId: "expense-tracker-app-bd9a1",
    storageBucket: "expense-tracker-app-bd9a1.appspot.com",
    messagingSenderId: "1069713139169",
    appId: "1:1069713139169:web:ceff173f9bdfab2d3e1ea0"
  };
const firebase:any=initializeApp(firebaseConfig)
   

export default firebase;