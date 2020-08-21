import * as types from './actions-types';
import centresAPI from '../api/MockCentresApi';
import {beginApiCall} from './api-status-actions';

export function loadCentresSuccess(centres){
    return { type: types.LOAD_CENTRES_SUCCESS, centres};
}

export function loadCentres() {
    return function(dispatch) {
        dispatch(beginApiCall());
        return centresAPI.getAllCentres().then(centres => {
            dispatch(loadCentresSuccess(centres));
        }).catch(error => {
            throw(error);
        });
    };
}
