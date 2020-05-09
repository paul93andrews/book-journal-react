const displayChangesDefaultState = [
    {
        descriptionModal: 'hidden',
        searchErrorModal: 'hidden',
        bookDetails: '',
        pageType: '',
        loadingStatus: '',
        descriptionValueUpdating: false,
    }
];

const displayChangesReducer = (state = displayChangesDefaultState, action) => {
    switch (action.type) {
        case 'DISPLAY_DESCRIPTION_MODAL':
            return state.map(property => {
                return {
                    ...property,
                    descriptionModal: action.property,
                }
            });
        case 'HIDE_DESCRIPTION_MODAL':
            return state.map(property => {
                return {
                    ...property,
                    descriptionModal: action.property,
                }
            })
        case 'INCREMENT_DESCRIPTION_VALUE_COUNTER':
            return state.map(property => {
                return {
                    ...property,
                    descriptionValueUpdating: true,
                }
            })
        case 'RESET_DESCRIPTION_VALUE_COUNTER':
            return state.map(property => {
                return {
                    ...property,
                    descriptionValueUpdating: false,
                }
            })
        case 'DISPLAY_SELECTED_BOOK':
            return state.map(property => {
                return {
                    ...property,
                    bookDetails: action.bookDetails,
                }
            })
        case 'TRACK_CURRENT_PAGE':
            return state.map(property => {
                return {
                    ...property,
                    pageType: action.pageType 
                }
            })
        case 'SET_LOADING_STATE':
            return state.map(property => {
                return {
                    ...property,
                    loadingStatus: action.status,
                }
            })
        case 'DISPLAY_SEARCH_ERROR_MODAL':
            return state.map(property => {
                return {
                    ...property,
                    searchErrorModal: action.property,
                }
            })
        case 'HIDE_SEARCH_ERROR_MODAL':
            return state.map(property => {
                return {
                    ...property,
                    searchErrorModal: action.property,
                }
            })
        default:
            return state;
    }
}

export default displayChangesReducer;