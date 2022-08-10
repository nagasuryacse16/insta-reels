// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBoQxgTvpxlJRXuEZGiX9X4EEmnu2urWJE",
    authDomain: "instagram-reels-d7d79.firebaseapp.com",
    projectId: "instagram-reels-d7d79",
    storageBucket: "instagram-reels-d7d79.appspot.com",
    messagingSenderId: "410319412131",
    appId: "1:410319412131:web:1614e67bd6d5dcc2f35816",
    measurementId: "G-10PTGCMKKX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  
  export default db;