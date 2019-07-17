import * as types from '../types';

const INITIAL_STATE = {
    loading: false,
    user: null,
    error: ''
};

export default function(state = INITIAL_STATE, action) {
    console.log(action);
    switch (action.type) {
        case types.LOGIN_USER:
            return { ...state, loading: true, error: '' };
        case types.LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload, error: '', loading: false };
        case types.LOGIN_USER_ERROR:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
}
