import database from '../firebase/firebase';

//object is dispatched to redux store
export const addBook = (book) => ({
    type: 'ADD_BOOK',
    book
});

//this is the function that will start the addBook process and return a function that will set data to firebase database as well
export const startAddBook = (expenseData = {}) => {
    return (dispatch) => {
        const {
            id = '',
            title = '',
            author = '',
            year = '',
            image = '',
            description = ','
        } = expenseData;
        const book = { id, title, author, year, image, description }

        database.ref(`books/${book.id}`).push(book).then((ref) => {
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
    return (dispatch) => {
        return database.ref('books').once('value').then((snapshot) => {
            const books = []
            
            snapshot.forEach((childSnapshot) => {
                const booksFromObjectSnapshot = {...childSnapshot.val()}
                const booksFromDatabase = Object.values(booksFromObjectSnapshot);
                books.push(
                    ...booksFromDatabase
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
    console.log(id);
    return (dispatch) => {
        return database.ref(`books/${id}`).remove().then(() => {
            dispatch(removeSelectedBook(id));
        });
    };
};

export const removeLatestBook = () => ({
    type: 'REMOVE_LATEST_BOOK'
});

export const addDescription = (description) => ({
    type: 'ADD_DESCRIPTION',
    description
});