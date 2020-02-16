import { createStore, combineReducers } from 'redux';

import searchResultsReducer from '../reducers/searchResults';
import bookCatalogueReducer from '../reducers/bookCatalogue';
import displayChangesReducer from '../reducers/displayChanges';

export default () => {
    const store = createStore(
        combineReducers({
            searchResults: searchResultsReducer,
            bookCatalogue: bookCatalogueReducer,
            displayChanges: displayChangesReducer,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}