const searchResultsDefaultState = [];

const searchResultsReducer = (state = searchResultsDefaultState, action) => {
    switch (action.type) {
        case 'ADD_SEARCH_RESULT':
            return [
                action.searchResult,
            ];
        default: 
            return state;
    }
}

export default searchResultsReducer;