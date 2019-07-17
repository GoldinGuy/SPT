import firebase from 'firebase';
import * as types from '../types';

export const loginUser = (email, password) => {
    return dispatch => {
        dispatch({ type: types.LOGIN_USER });
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(user => dispatch({ type: types.LOGIN_USER_SUCCESS, payload: user }))
            .catch(e => dispatch({ type: types.LOGIN_USER_ERROR, payload: e.message }));
    };
};

export const createUser = (email, password) => {
    return dispatch => {
        dispatch({ type: types.LOGIN_USER });
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(user => dispatch({ type: types.LOGIN_USER_SUCCESS, payload: user }))
            .catch(e => dispatch({ type: types.LOGIN_USER_ERROR, payload: e.message }));
    };
};
