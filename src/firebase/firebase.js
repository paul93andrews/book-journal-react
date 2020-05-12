import * as firebase from 'firebase';

    const firebaseConfig = {
        apiKey: "AIzaSyA5jwou6ArHWAOTkedR40JBbOGZu1gHKQI",
        authDomain: "book-journal-b1de5.firebaseapp.com",
        databaseURL: "https://book-journal-b1de5.firebaseio.com",
        projectId: "book-journal-b1de5",
        storageBucket: "book-journal-b1de5.appspot.com",
        messagingSenderId: "287652036477",
        appId: "1:287652036477:web:8aee55e149d74720351614"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    const database = firebase.database();

    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

    export { firebase, googleAuthProvider, database as default };