import firebase from 'firebase';
import '@firebase/firestore';

import * as types from '../types';

export const getCamp = code => {
    console.log('Code: ' + code);
    const db = firebase.firestore();
    return async dispatch => {
        dispatch({ type: types.GET_CAMP });
        db.collection('camps')
            .where('code', '==', code)
            .get()
            .then(snapshot => {
                if (snapshot.empty) {
                    dispatch({ type: types.GET_CAMP_FAILURE, payload: 'No Camps Exist' });
                    return;
                }
                snapshot.forEach(doc => {
                    dispatch({ type: types.GET_CAMP_SUCCESS, payload: doc.data() });
                });
            })
            .catch(e => {
                console.log(e);
                dispatch({ type: types.GET_CAMP_FAILURE, payload: e.message });
            });
    };
};
