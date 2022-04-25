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
export const firestore= firebase.firestore();
export const storage = firebase.storage();
