import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import searchResultsReducer from '../reducers/searchResults';
import bookCatalogueReducer from '../reducers/bookCatalogue';
import displayChangesReducer from '../reducers/displayChanges';
import authReducer from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export default () => {
    const store = createStore(
        combineReducers({
            searchResults: searchResultsReducer,
            bookCatalogue: bookCatalogueReducer,
            displayChanges: displayChangesReducer,
            auth: authReducer,
        }),
        composeEnhancers(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}