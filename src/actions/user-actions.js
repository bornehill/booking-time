import * as types from './actions-types';
import {beginApiCall} from './api-status-actions';
import {authService} from '../service/auth-service';

export function loginSuccess(user){
  sessionStorage.setItem('token', user.token);
  return { type: types.LOGIN_USER_SUCCESS, user};
}

export function loginUserFailure(error) {
  sessionStorage.removeItem('token');
  return {
    type: types.LOGIN_USER_FAILURE,
    payload: {
      status: error.response.status,
      statusText: error.response.statusText
    }
  };
}

export function loginUserRequest() {
  return {
    type: types.LOGIN_USER_REQUEST
  };
}

export function loginUser(user, redirect="/") {
  return function(dispatch){
    dispatch(beginApiCall());
    return authService.login(user).then(auth => {
      dispatch(loginSuccess(auth));
    }).catch(error => {
        dispatch(loginUserFailure(error));
    });
  };
}
