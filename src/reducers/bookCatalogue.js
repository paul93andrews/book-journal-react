import { stat } from "fs";

const bookCatalogueDefaultState = [];

const bookCatalogueReducer = (state = bookCatalogueDefaultState, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return [
                ...state,
                action.book,
            ];
        case 'REMOVE_SELECTED_BOOK':
            return state.filter(book => {
                if (book.id !== action.id) {
                    return book
                }
            })
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
        case 'SET_BOOK_CATALOGUE':
            return action.books
        default:
            return state;
    }
}

export default bookCatalogueReducer;