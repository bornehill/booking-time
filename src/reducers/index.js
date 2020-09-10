import { combineReducers } from 'redux';
import centres from './centres-reducer';
import apiCallsInProgress from './api-status-reducer';
import activities from './api-activities-reducer';
import user from './user.reducer';

const rootReducer = combineReducers({
    centres,
    apiCallsInProgress,
    activities,
    user
});

export default rootReducer;
