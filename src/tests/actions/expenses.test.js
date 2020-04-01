import { addBook, setBookCatalogue, removeSelectedBook, removeLatestBook, addDescription } from '../../actions/bookCatalogue';

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

test('should set id of book to be removed to be sent to redux', () => {
    const action = removeSelectedBook('123456');

    expect(action).toEqual({
        type: 'REMOVE_SELECTED_BOOK',
        id: '123456',
    });
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