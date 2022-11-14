import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyARTCXz9NASDSfmcomOORINsB1QgtD4m74",
    authDomain: "marcato-2edbe.firebaseapp.com",
    projectId: "marcato-2edbe",
    storageBucket: "marcato-2edbe.appspot.com",
    messagingSenderId: "76781818842",
    appId: "1:76781818842:web:b94e5c5a43f88ae1dd26e3",
    measurementId: "G-SP2XR0W7FK"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
