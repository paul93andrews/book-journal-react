import displayChangesReducer from '../../reducers/displayChanges';

const defaultState = [
    {
        descriptionModal: 'hidden',
        bookID: '',
        pageType: '',
        loadingStatus: '',
    }
];

test('should set up the state on page load', () => {
    const state = displayChangesReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual(defaultState)
})

test('should set the display description modal to display modal', () => {
    const action = {
        type: 'DISPLAY_DESCRIPTION_MODAL',
        property: 'show'
    }

    const state = displayChangesReducer(defaultState, action);

    expect(state[0].descriptionModal).toBe('show')
})

test('should set the display description modal to hide modal', () => {
    const action = {
        type: 'HIDE_DESCRIPTION_MODAL',
        property: 'hidden'
    }

    const state = displayChangesReducer(defaultState, action);

    expect(state).toEqual(defaultState)
})

test('should change the bookID value to the id of the book to display', () => {
    const action = {
        type: 'DISPLAY_SELECTED_BOOK',
        id: '123456'
    }

    const state = displayChangesReducer(defaultState, action);

    expect(state[0].bookID).toBe('123456')
})

test('should update the pageType value with the page type user is on', () => {
    const action = {
        type: 'TRACK_CURRENT_PAGE',
        pageType: 'cataloguePage'
    }

    const state = displayChangesReducer(defaultState, action);

    expect(state[0].pageType).toBe('cataloguePage')
})

test('should update the loadingStatus value to whether page is loading or not', () => {
    const action = {
        type: 'SET_LOADING_STATE',
        status: 'loading'
    }

    const state = displayChangesReducer(defaultState, action)

    expect(state[0].loadingStatus).toBe('loading')
})