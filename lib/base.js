import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/auth';
import Rebase from 're-base';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

// const firebaseApp = firebase.initializeApp(config);
// const firebaseApp = !firebase.apps.length
//   ? firebase.initializeApp(config)
//   : firebase.app();

if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app();
}

const firestore = firebase.firestore();
const auth = firebase.auth();
// const base = Rebase.createClass(firestore);

const base = Rebase.createClass(firebase.database());

// export { firebaseApp };
export { firebase, auth, firestore };
export default base;
