import firebase from 'firebase';
import '@firebase/firestore';

import * as types from '../types';

export const loginUser = (email, password) => {
    const db = firebase.firestore();
    return dispatch => {
        dispatch({ type: types.LOGIN_USER });
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(data => {
                const { user } = data;
                db.collection('users')
                    .doc(user.uid)
                    .get()
                    .then(doc => {
                        if (!doc.exists) {
                            dispatch({ type: types.LOGIN_USER_ERROR, payload: 'No Account Found' });
                        } else {
                            dispatch({
                                type: types.LOGIN_USER_SUCCESS,
                                payload: { ...user, admin: doc.data().admin }
                            });
                        }
                    });
            })
            .catch(e => dispatch({ type: types.LOGIN_USER_ERROR, payload: e.message }));
    };
};

export const createUser = (email, password, admin) => {
    const db = firebase.firestore();
    return dispatch => {
        dispatch({ type: types.LOGIN_USER });
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(data => {
                const { user } = data;
                console.log(user);
                db.collection('users')
                    .doc(user.uid)
                    .set({ admin })
                    .then(
                        dispatch({ type: types.LOGIN_USER_SUCCESS, payload: { ...user, admin } })
                    );
            })
            .catch(e => dispatch({ type: types.LOGIN_USER_ERROR, payload: e.message }));
    };
};
