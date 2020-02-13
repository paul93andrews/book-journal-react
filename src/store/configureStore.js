import { createStore, combineReducers } from 'redux';

import searchResultsReducer from '../reducers/searchResults';
import bookCatalogueReducer from '../reducers/bookCatalogue';

export default () => {
    const store = createStore(
        combineReducers({
            searchResults: searchResultsReducer,
            bookCatalogue: bookCatalogueReducer,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}