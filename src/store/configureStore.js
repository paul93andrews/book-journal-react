import { createStore, combineReducers } from 'redux';

import searchResultsReducer from '../reducers/searchResults';

export default () => {
    const store = createStore(
        combineReducers({
            searchResults: searchResultsReducer,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}