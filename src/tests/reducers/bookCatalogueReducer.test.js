import bookCatalogueReducer from '../../reducers/bookCatalogue';

const previousState = [
    {
        book: 'the book',
        id: '1234'
    },
    {
        book: 'the other book',
        id: '5678'
    },
    {
        book: 'the other other book',
        id: '09876'
    }
]

test('should set up default book catalogue values', () => {
    const state = bookCatalogueReducer(undefined, { type: '@@INIT' })

    expect(state).toEqual([])
})

test('should add a book object to the state', () => {
    const book = { book: 'the book', year: 'the year' };
    const action = {
        type: 'ADD_BOOK',
        book
    }

    const state = bookCatalogueReducer(undefined, action);

    expect(state).toEqual(
        [{
            book: 'the book',
            year: 'the year'
        }
    ]
    )
})

test('should remove book with the id argument passed in', () => {
    const id = '1234'
    const action = {
        type: 'REMOVE_SELECTED_BOOK',
        id
    }

    const state = bookCatalogueReducer(previousState, action);

    expect(state).toEqual([
        {
            book: 'the other book',
            id: '5678'
        },
        {
            book: 'the other other book',
            id: '09876'
        }
    ])
})

test('should remove the last book from the state', () => {
    const action = {
        type: 'REMOVE_LATEST_BOOK'
    }

    const state = bookCatalogueReducer(previousState, action);

    expect(state).toEqual([
        {
            book: 'the book',
            id: '1234'
        },
        {
            book: 'the other book',
            id: '5678'
        },
    ])
})

test('should add a description to the book with the id passed in to argument', () => {
    const action = {
        type: 'ADD_DESCRIPTION',
        id: '09876',
        description: 'the description',
    }

    const state = bookCatalogueReducer(previousState, action);

    expect(state).toEqual([
        {
            book: 'the book',
            id: '1234'
        },
        {
            book: 'the other book',
            id: '5678'
        },
        {
            book: 'the other other book',
            id: '09876',
            description: 'the description'
        }
    ])
})

test('should set the state with previous state from firebase', () => {
    const action = {
        type: 'SET_BOOK_CATALOGUE',
        books: previousState
    }

    const state = bookCatalogueReducer(undefined, action);

    expect(state).toEqual([
        {
            book: 'the book',
            id: '1234'
        },
        {
            book: 'the other book',
            id: '5678'
        },
        {
            book: 'the other other book',
            id: '09876'
        }
    ])
})