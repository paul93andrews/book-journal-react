export const addSearchResult = (result) => ({
    type: 'ADD_SEARCH_RESULT',
    searchResult: result
});

export const resetSearchResult = () => ({
    type: 'RESET_SEARCH_RESULT',
})