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

    database.ref('notes').push({
        title: 'to do',
        body: 'test activity',
    })

    database.ref('expenses').push({
        description: 'hockey card purchase',
        note: 'the mcdavid and crosby collection',
        amount: 3,
        createdAt: '10 15 2005',
    })
    database.ref('expenses').push({
        description: 'soup for dinner',
        note: 'chicken noodle',
        amount: 4,
        createdAt: '10 16 2005',
    })
    database.ref('expenses').push({
        description: 'simpsons dvd',
        note: 'third season',
        amount: 3,
        createdAt: '10 17 2005',
    })

    // const testArrData = [{
    //     song: 'Adia',
    //     Canadian: true,
    // }, {
    //     song: 'Rockin\' in the Free World',
    //     Canadian: true,
    // }]

    // database.ref('notes').set(testArrData)

    // database.ref('location/country')
    //     .once('value')
    //     .then((snapshot) => {
    //         console.log(snapshot.val());
    //     }).catch((e) => {
    //         console.log(e, 'error fetching data');
    //     })
    // const generalValueChange = database.ref().on('value', (snapshot) => {
    //     console.log(snapshot.val());
    // })

    // database.ref().set({
    //     name: 'paul andrews',
    //     age: 26,
    //     location: {
    //         city: 'Toronto',
    //         country: 'Canada',
    //     },
    //     isSingle: true,
    // }).then(() => {
    //     console.log('data saved successfully!');
    // }).catch((e) => {
    //     console.log(e);
    // })

    // database.ref().update({
    //     name: 'JT',
    //     age: 27,
    //     job: 'Web Developer',
    //     isSingle: null,
    // })

    // //the off() method unsubscribes from fetching changes synchronously
    // database.ref().off('value', generalValueChange)

    // //this change wont be console.logged to the browser as a result
    // database.ref().update({
    //     job: 'Firefighter'
    // })