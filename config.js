import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyAh6nzcIu6Jqflxxu2mI4RK1ojJloCVaK4",
    authDomain: "book-santa-703b3.firebaseapp.com",
    databaseURL: "https://book-santa-703b3.firebaseio.com",
    projectId: "book-santa-703b3",
    storageBucket: "book-santa-703b3.appspot.com",
    messagingSenderId: "139666573881",
    appId: "1:139666573881:web:de7477a55f12f18781dbe8"
};

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
