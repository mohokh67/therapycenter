import Rebase from 're-base';
import firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL
};

// const firebaseApp = firebase.initializeApp(config);
const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();
const base = Rebase.createClass(firebase.database());

export { firebaseApp };
export default base;
