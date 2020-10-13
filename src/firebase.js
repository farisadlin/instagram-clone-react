// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAP_uMhVXJPTqZgITgPHWxzijrRRO7JgJM",
    authDomain: "social-media-react-app-4e4c7.firebaseapp.com",
    databaseURL: "https://social-media-react-app-4e4c7.firebaseio.com",
    projectId: "social-media-react-app-4e4c7",
    storageBucket: "social-media-react-app-4e4c7.appspot.com",
    messagingSenderId: "560244850263",
    appId: "1:560244850263:web:b1e9dfd8f31c10ae17ed12",
    measurementId: "G-BB30394S12"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage };
//   export default db;