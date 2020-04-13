import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
    addBook, 
    startAddBook,
    setBookCatalogue, 
    startSetBookCatalogue,
    removeSelectedBook, 
    startRemoveSelectedBook,
    removeLatestBook, 
    addDescription,
    startAddDescription,
} from '../../actions/bookCatalogue';
import database from '../../firebase/firebase';
import { bookCatalogueList } from '../fixtures/books';

const uid = 'thisisthetestuserid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const bookData = {};
    bookCatalogueList.forEach(({ id, title, year, author, image, description }) => {
        bookData[id] = { title, year, author, image, description };
    });
    database.ref(`users/${uid}/books`).set(bookData).then(() => done());
});

test('should set up book to be added to redux', () => {
    const action = addBook({ 
        id: '123456', 
        title: 'sample book', 
        year: '1883', 
        author: 'mcfacey face' 
    });

    expect(action).toEqual({
        type: 'ADD_BOOK',
        book: {
            id: '123456',
            title: 'sample book',
            year: '1883',
            author: 'mcfacey face' 
        }
    });
})

test('should add book to firebase and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const bookData = {
        title: 'random book',
        year: '1883',
        image: '',
        description: ',',
        author: 'some random author'
    }

    store.dispatch(startAddBook(bookData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_BOOK',
            book: {
                id: expect.any(String),
                ...bookData
            }
        });

        return database.ref(`users/${uid}/books/${actions[0].book.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(bookData);
        done();
    })
})

test('should set up book catalogue object to be added to redux', () => {
    const action = setBookCatalogue([
        {
            id: '123456',
            title: 'sample book',
            year: '1883',
            author: 'mcfacey face'
        },
        {
            id: '7891011',
            title: 'sample book',
            year: '1299',
            author: 'boatey face'
        },
]);

    expect(action).toEqual({
        type: 'SET_BOOK_CATALOGUE',
        books: [
            {
                id: '123456',
                title: 'sample book',
                year: '1883',
                author: 'mcfacey face'
            },
            {
                id: '7891011',
                title: 'sample book',
                year: '1299',
                author: 'boatey face'
            },
        ]
    })
})

test('should fetch the books saved in firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    
    store.dispatch(startSetBookCatalogue()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_BOOK_CATALOGUE',
            books: bookCatalogueList
        });
        
        done();
    })
})

test('should set id of book to be removed to be sent to redux', () => {
    const action = removeSelectedBook('123456');

    expect(action).toEqual({
        type: 'REMOVE_SELECTED_BOOK',
        id: '123456',
    });
});

test('should remove book from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = bookCatalogueList[2].id;
    
    store.dispatch(startRemoveSelectedBook(id)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_SELECTED_BOOK',
            id
        });

        return database.ref(`users/${uid}/books/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    })
})

test('this should send the type to redux', () => {
    const action = removeLatestBook()

    expect(action).toEqual({
        type: 'REMOVE_LATEST_BOOK',
    })
})

test('this should set the object with id of book and description to update on redux', () => {
    const action = addDescription('7891011', 'this was a fantastic book');

    expect(action).toEqual({
        type: 'ADD_DESCRIPTION',
        id: '7891011',
        description: 'this was a fantastic book'
    })
})

test('this should add a description in firebase to updated book', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = bookCatalogueList[2].id;
    const description = 'this is test';

    store.dispatch(startAddDescription(id, description)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_DESCRIPTION',
            id,
            description
        });

        return database.ref(`users/${uid}/books/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val().description).toBe(description);
        done();
    })
})