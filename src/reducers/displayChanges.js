const displayChangesDefaultState = [
    {
        descriptionModal: 'hidden',
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
                    descriptionModal: action.propery,
                }
            })
        default:
            return state;
    }
}

export default displayChangesReducer;