import searchResultsReducer from '../../reducers/searchResults';

const defaultState = []

const sampleBookData = {
    data: [
        {
        book: 'the book',
        year: 'the year',
        author: 'the author',
        publisher: 'the publisher'
        },
        {
            book: 'the other book',
            year: 'the other year',
            author: 'the other author',
            publisher: 'the other publisher'
        }
    ]
}

test('should set up state on page load', () => {
    const state = searchResultsReducer(undefined, { type: '@@INIT' })

    expect(state).toEqual(defaultState)
})

test('should add the book object data to state', () => {
    const action = {
        type: 'ADD_SEARCH_RESULT',
        searchResult: sampleBookData
    }

    const state = searchResultsReducer(defaultState, action)

    expect(state).toEqual(sampleBookData.data)
})

test('should remove the book search result data from state', () => {
    const action = {
        type: 'RESET_SEARCH_RESULT',
    }

    const state = searchResultsReducer(sampleBookData.data, action);

    expect(state).toEqual(defaultState)
})
