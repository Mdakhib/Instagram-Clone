import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyADzP77j1f4fHSJAcpWodgYkEx9H9zYANk",
  authDomain: "instagram-clone-80fc0.firebaseapp.com",
  projectId: "instagram-clone-80fc0",
  storageBucket: "instagram-clone-80fc0.appspot.com",
  messagingSenderId: "696899852492",
  appId: "1:696899852492:web:93f89396a4d12617044a69",
  measurementId: "G-0BQE09B26K",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
