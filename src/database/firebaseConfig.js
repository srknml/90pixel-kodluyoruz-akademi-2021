import firebase from "firebase/app";
import "firebase/firestore";

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  if (!firebase.apps.length) {
    firebase.initializeApp({});
  } else {
    firebase.app(); // if already initialized, use that one
  }
  export const db = firebase.firestore();
  // eslint-disable-next-line import/no-anonymous-default-export
  export default {
    firebaseConfig,
  };