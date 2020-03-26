import { firebase, googleAuthProvider } from '../firebase/firebase';
import { v4 as uuidv4 } from 'uuid';
import { createBrowserHistory } from 'history'


export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
}

export const loginGuest = () => ({
    type: 'GUEST-LOGIN',
    guestUID: uuidv4(),
});

const history = createBrowserHistory();


export const startLoginGuest = () => {
    return (dispatch) => {
        dispatch(loginGuest);
    }
}