import * as firebase from 'firebase';
require('@firebase/firestore');
var firebaseConfig = {
    apiKey: "AIzaSyBiJfTU9Q1Y17t3084Mh9cS9aL9YCmh-4Y",
    authDomain: "wily-b0e6a.firebaseapp.com",
    projectId: "wily-b0e6a",
    storageBucket: "wily-b0e6a.appspot.com",
    messagingSenderId: "417428490551",
    appId: "1:417428490551:web:f345e96b3e589c31f0f2b2"
}

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.firestore()