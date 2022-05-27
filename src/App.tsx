import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContextAPI from './components/Context/contextAPI';
import Tracker from './components/Tracker/Tracker';
import firebase from './Services/firebaseMesage';
import { getMessaging, getToken } from "firebase/messaging";

function App() {
  // Get registration token. Initially this makes a network call, once retrieved
  // subsequent calls to getToken will return from cache.

  const messaging = getMessaging(firebase);
getToken(messaging, { vapidKey: "AIzaSyA5dj7thDXPbF0emv7RVoBkrheXV_Azu1o" }).then((currentToken:any) => {
    if (currentToken) {
   console.log(currentToken)
      // ...
    } else {
      // Show permission request UI
      console.log('No registration token available. Request permission to generate one.');
      // ...
    }
  }).catch((err:any) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
  });
  return <div>
    <ContextAPI>
<button ></button>    
<Tracker/>
    </ContextAPI>
  </div>

}

export default App;
