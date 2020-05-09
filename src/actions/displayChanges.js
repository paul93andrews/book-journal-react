export const displayDescriptionModal = (display) => ({
    type: 'DISPLAY_DESCRIPTION_MODAL',
    property: display
});

export const hideDescriptionModal = (hidden) => ({
    type: 'HIDE_DESCRIPTION_MODAL',
    property: hidden
})

export const updatingDescriptionValue = () => ({
    type: 'INCREMENT_DESCRIPTION_VALUE_COUNTER',
})

export const resetDescriptionValue = () => ({
    type: 'RESET_DESCRIPTION_VALUE_COUNTER',
})

export const displaySelectedBook = (id, title, author, year, description = '') => ({
    type: 'DISPLAY_SELECTED_BOOK',
    bookDetails: {
        id, 
        title,
        author, 
        year,
        description
    }
})

export const trackCurrentPage = (pageType) => ({
    type: 'TRACK_CURRENT_PAGE',
    pageType
})

export const setLoadingState = (status) => ({
    type: 'SET_LOADING_STATE',
    status
})

export const displaySearchErrorModal = (display) => ({
    type: 'DISPLAY_SEARCH_ERROR_MODAL',
    property: display,
})

export const hideSearchErrorModal = (hidden) => ({
    type: 'HIDE_SEARCH_ERROR_MODAL',
    property: hidden,
})