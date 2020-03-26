import { firebase, googleAuthProvider } from '../firebase/firebase';
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

export const startLoginGuest = () => {
    return () => {
        console.log('fired?');
        return firebase.auth().signInAnonymously();
    }
}

const history = createBrowserHistory();