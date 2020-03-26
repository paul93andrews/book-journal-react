export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                uid: action.uid,
            }
        case 'LOGOUT':
            return {}
        case 'GUEST-LOGIN':
            return {
                uid: action.guestUID,
            }
        default:
            return state;
    }
}