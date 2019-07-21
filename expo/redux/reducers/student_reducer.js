import * as types from '../types';

const INITIAL_STATE = {
    loading: false,
    error: '',
    camp: null
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.GET_CAMP:
            return { ...state, loading: true, error: '' };
        case types.GET_CAMP_SUCCESS:
            return { ...state, camp: action.payload, error: '', loading: false };
        case types.GET_CAMP_FAILURE:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
}
