import database from '../firebase/firebase';

//object is dispatched to redux store
export const addBook = (book) => ({
    type: 'ADD_BOOK',
    book
});

//this is the function that will start the addBook process and return a function that will set data to firebase database as well
export const startAddBook = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            id = '',
            title = '',
            author = '',
            year = '',
            image = '',
            description = ','
        } = expenseData;
        const book = { title, author, year, image, description }

        return database.ref(`users/${uid}/books`).push(book).then((ref) => {
            dispatch(addBook({
                id: ref.key,
                ...book,
            }));
        });
    }
}

export const setBookCatalogue = (books) => ({
    type: 'SET_BOOK_CATALOGUE',
    books,
})

export const startSetBookCatalogue = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/books`).once('value').then((snapshot) => {
            const books = []
            
            snapshot.forEach((childSnapshot) => {
                books.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                    }
                )
            })
            
            dispatch(setBookCatalogue(books));
        })
    }
}

export const removeSelectedBook = (id) => ({
    type: 'REMOVE_SELECTED_BOOK',
    id
})

export const startRemoveSelectedBook = (id) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/books/${id}`).remove().then(() => {
            dispatch(removeSelectedBook(id));
        });
    };
};

export const removeLatestBook = () => ({
    type: 'REMOVE_LATEST_BOOK'
});

export const addDescription = (id, description) => ({
    type: 'ADD_DESCRIPTION',
    id,
    description
});

export const startAddDescription = (id, description) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/books/${id}`).update({description}).then((snapshot) => {
            dispatch(addDescription(id, description));
        })
    }
}