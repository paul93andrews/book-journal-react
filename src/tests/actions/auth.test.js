import { login, logout } from '../../actions/auth';

test('should send log in id to the redux store', () => {
    const action = login('56789')

    expect(action).toEqual({
        type: 'LOGIN',
        uid: '56789'
    })
})

test('should send the action type to reset uid in redux store', () => {
    const action = logout();

    expect(action).toEqual({
        type: 'LOGOUT'
    })
})