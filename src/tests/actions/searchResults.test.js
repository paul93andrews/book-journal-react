import { addSearchResult, resetSearchResult } from '../../actions/searchResults';

test('should add results object from API call to the redux store', () => {
    const action = addSearchResult({
        book: 'the book',
        author: 'the author',
        year: 'the year',
        publisher: 'the publisher'
    })

    expect(action).toEqual({
        type: 'ADD_SEARCH_RESULT',
        searchResult: {
            book: 'the book',
            author: 'the author',
            year: 'the year',
            publisher: 'the publisher'
        }
    })
})

test('should send the reset object action to the redux store', () => {
    const action = resetSearchResult();

    expect(action).toEqual({
        type: 'RESET_SEARCH_RESULT'
    })
})