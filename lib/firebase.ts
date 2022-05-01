import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// Firebase credentials
const firebaseConfig = {
  apiKey: "AIzaSyCuKhZ3JHCz1S0es_0R6R53ZuRR6Ds4yiQ",
  authDomain: "fir-demo-5101e.firebaseapp.com",
  projectId: "fir-demo-5101e",
  storageBucket: "fir-demo-5101e.appspot.com",
  messagingSenderId: "1008850325183",
  appId: "1:1008850325183:web:39b730845bab29251c400a",
  measurementId: "G-YTV9F84WZ0"
};

//  Inits firebase if it hasn't been initialized
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
};

// Exports firebase for use elsewhere in the application
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore= firebase.firestore();
export const storage = firebase.storage();


/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
 export async function getUserWithUsername(username) {
  const usersRef = firestore.collection('users');
  const query = usersRef.where('username', '==', username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  };
}

export const fromMillis = firebase.firestore.Timestamp.fromMillis;

