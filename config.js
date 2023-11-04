import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
  apiKey: "AIzaSyC0V2kVWHLh6J4IRsC-K-wJbYTtn4QRsVI",
  authDomain: "learning-english-app-f3664.firebaseapp.com",
  projectId: "learning-english-app-f3664",
  storageBucket: "learning-english-app-f3664.appspot.com",
  messagingSenderId: "230297070461",
  appId: "1:230297070461:web:f15096b2181019541b3a14"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();