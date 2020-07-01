import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import firestore from 'firebase/firestore'


firebase.initializeApp({
    apiKey: "AIzaSyBhXXg8ArpiVRWUjmqsIdM3ygCItloiNjs",
    authDomain: "evernote-clone-6a96d.firebaseapp.com",
    databaseURL: "https://evernote-clone-6a96d.firebaseio.com",
    projectId: "evernote-clone-6a96d",
    storageBucket: "evernote-clone-6a96d.appspot.com",
    messagingSenderId: "915437558234",
    appId: "1:915437558234:web:0f1c2cdedd5425ec44c8e3"
});


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
