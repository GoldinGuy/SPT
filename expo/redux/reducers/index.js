import { combineReducers } from 'redux';
import auth from './auth_reducer';
import student from './student_reducer';
import admin from './admin_reducer';

export default combineReducers({
    auth,
    student,
    admin
});
