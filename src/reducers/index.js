import { combineReducers } from 'redux';
import centres from './centres-reducer';
import apiCallsInProgress from './api-status-reducer';

const rootReducer = combineReducers({
    centres,
    apiCallsInProgress
});

export default rootReducer;
