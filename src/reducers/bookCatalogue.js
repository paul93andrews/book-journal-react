import { stat } from "fs";

const bookCatalogueDefaultState = [];

const bookCatalogueReducer = (state = bookCatalogueDefaultState, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return [
                ...state,
                action.book,
            ];
        case 'REMOVE_LATEST_BOOK':
            return state.filter(book => {
                if(state.indexOf(book) !== state.length - 1) {
                    return book
                }
            })
        case 'ADD_DESCRIPTION':
            return state.map(book => {
                if(state.indexOf(book) === state.length - 1) {
                    return {
                        ...book,
                        description: action.description,
                    }
                }
                return book;
            })
        default:
            return state;
    }
}

export default bookCatalogueReducer;