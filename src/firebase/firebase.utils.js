import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// insert your own config
const config = {
  apiKey: "AIzaSyADLRNyqILrrmhEcEd6zwyVU5oKaxDUrEg",
  authDomain: "crwn-db-e4d30.firebaseapp.com",
  databaseURL: "https://crwn-db-e4d30.firebaseio.com",
  projectId: "crwn-db-e4d30",
  storageBucket: "crwn-db-e4d30.appspot.com",
  messagingSenderId: "698191699145",
  appId: "1:698191699145:web:f1a918b2ae50f6c88ac118",
  measurementId: "G-XD209Y6WMJ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
