import * as types from '../types';

const INITIAL_STATE = {
    loading: false,
    error: '',
    camps: []
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.GET_CAMPS:
            return { ...state, loading: true, error: '' };
        case types.GET_CAMPS_SUCCESS:
            return { ...state, camps: action.payload, error: '', loading: false };
        case types.GET_CAMPS_FAILURE:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
}
