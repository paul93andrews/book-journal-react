const displayChangesDefaultState = [
    {
        descriptionModal: 'hidden',
        bookID: '',
        pageType: '',
        loadingStatus: '',
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
        case 'DISPLAY_SELECTED_BOOK':
            return state.map(property => {
                return {
                    ...property,
                    bookID: action.id,
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
        default:
            return state;
    }
}

export default displayChangesReducer;