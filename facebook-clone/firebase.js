import firebase from 'firebase';
import 'firebase/storage';


const firebaseConfig = {
//   Add your firebase project configuration data
  };


  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();

  const storage = firebase.storage();

  export {db, storage}