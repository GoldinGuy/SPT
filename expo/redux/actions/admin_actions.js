import firebase from 'firebase';
import '@firebase/firestore';

import * as types from '../types';

export const getCamps = admincode => {
    const db = firebase.firestore();
    return dispatch => {
        db.collection('camps')
            .where('admincode', '==', admincode)
            .get()
            .then(snapshot => {
                if (snapshot.empty) {
                    dispatch({ type: types.GET_CAMPS_FAILURE, payload: 'No Camps Exist' });
                    return;
                }

                let camps = [];
                snapshot.forEach(doc => {
                    camps.push(doc.data());
                });

                dispatch({ type: types.GET_CAMP_SUCCESS, payload: camps });
            });
    };
};
