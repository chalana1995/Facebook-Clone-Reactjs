import firebase from 'firebase';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyCppgxLBMfm0UnepXvL7e9rxiPwDhn-IvM",
    authDomain: "facebook-clone-ck.firebaseapp.com",
    projectId: "facebook-clone-ck",
    storageBucket: "facebook-clone-ck.appspot.com",
    messagingSenderId: "767142014675",
    appId: "1:767142014675:web:fc7f4a9cf89f08d025ee26"
  };


  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();

  const storage = firebase.storage();

  export {db, storage}