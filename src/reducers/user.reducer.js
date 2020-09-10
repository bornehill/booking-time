import * as types from '../actions/actions-types';
import initialState from './initialState';

export default function userReducer(state = initialState.user, action)
{
    switch(action.type)
    {
        case types.LOGIN_USER_FAILURE:
            return action.payload;
        case types.LOGIN_USER_SUCCESS:
          return action.user;

        default:
            return state;
    }
}
