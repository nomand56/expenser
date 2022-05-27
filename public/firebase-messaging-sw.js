
importScripts('https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.9/firebase-messaging.js');

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyA5dj7thDXPbF0emv7RVoBkrheXV_Azu1o",
    authDomain: "expense-tracker-app-bd9a1.firebaseapp.com",
    projectId: "expense-tracker-app-bd9a1",
    storageBucket: "expense-tracker-app-bd9a1.appspot.com",
    messagingSenderId: "1069713139169",
    appId: "1:1069713139169:web:ceff173f9bdfab2d3e1ea0"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.messaging();



