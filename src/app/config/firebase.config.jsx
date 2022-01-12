import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "FIREBASE_API_KEY",
    authDomain: "FIREBASE_DOMAIN",
    databaseURL: "FIREBASE_DATABASE",
    projectId: "FIREBASE_PROJECT_ID",
    storageBucket: "FIREBASE_STORAGE",
    messagingSenderId: "FIREBASE_MESSAGE_SENDER_ID",
    appId: "FIREBASE_APP_ID",
    measurementId: "FIREBASE_MEASUREMENt_ID"
};

let app = firebase.initializeApp(firebaseConfig);
export { app }
export default firebase