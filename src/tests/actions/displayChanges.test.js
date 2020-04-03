import { 
    displayDescriptionModal, 
    hideDescriptionModal, 
    displaySelectedBook, 
    trackCurrentPage, 
    setLoadingState
} from '../../actions/displayChanges';

test('should change state property to display in redux store', () => {
    const action = displayDescriptionModal('show');

    expect(action).toEqual({
        type: 'DISPLAY_DESCRIPTION_MODAL',
        property: 'show'
    })
});

test('should change state property to hide in redux store', () => {
    const action = hideDescriptionModal('hide');

    expect(action).toEqual({
        type: 'HIDE_DESCRIPTION_MODAL',
        property: 'hide'
    })
});

test('should add id of selected book to be displayed', () => {
    const action = displaySelectedBook('1234456');

    expect(action).toEqual({
        type: 'DISPLAY_SELECTED_BOOK',
        id: '1234456'
    })
});

test('should add the page type to the redux store', () => {
    const action = trackCurrentPage('cataloguePage');

    expect(action).toEqual({
        type: 'TRACK_CURRENT_PAGE',
        pageType: 'cataloguePage'
    })
});

test('should set a loading state status to redux store', () => {
    const action = setLoadingState('loading');

    expect(action).toEqual({
        type: 'SET_LOADING_STATE',
        status: 'loading'
    })
});