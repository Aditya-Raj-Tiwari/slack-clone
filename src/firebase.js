// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA8HUap64mwTFTWZ0M0ldRUNCq0rG74Yd8",
  authDomain: "slack-clone-cc5be.firebaseapp.com",
  databaseURL:
    "https://slack-clone-cc5be-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "slack-clone-cc5be",
  storageBucket: "slack-clone-cc5be.appspot.com",
  messagingSenderId: "931459719442",
  appId: "1:931459719442:web:a53440e25052455c3953cb",
  measurementId: "G-PSSVPN4Z1J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provide = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
