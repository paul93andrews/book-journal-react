const bookCatalogueDefaultState = [];

const bookCatalogueReducer = (state = bookCatalogueDefaultState, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return [
                ...state,
                action.book
            ];
        default:
            return state;
    }
}

export default bookCatalogueReducer;