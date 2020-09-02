import * as types from './actions-types';
import {centreService} from '../service/centre-service';
import {beginApiCall} from './api-status-actions';

export function loadCentresSuccess(centres){
    return { type: types.LOAD_CENTRES_SUCCESS, centres};
}

export function loadCentreScheduleSuccess(centreSchedule){
  return { type: types.LOAD_CENTRE_SCHEDULE_SUCCESS, centreSchedule};
}

export function loadCentres() {
    return function(dispatch) {
        dispatch(beginApiCall());
        return centreService.getAllCentres().then(centres => {
            dispatch(loadCentresSuccess(centres));
        }).catch(error => {
            throw(error);
        });
    };
}

export function loadCentreSchedule(centre) {
  return function(dispatch) {
      dispatch(beginApiCall());
      return centreService.getCentreSchedule(centre).then(centreSchedule => {
          dispatch(loadCentreScheduleSuccess(centreSchedule));
      }).catch(error => {
          throw(error);
      });
  };
}
