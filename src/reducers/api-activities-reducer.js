import * as types from '../actions/actions-types';
import initialState from './initialState';

export default function activitiesReducer(state = initialState.activities, action)
{
    switch(action.type)
    {
        case types.LOAD_ACTIVITIES_SUCCESS:
            return action.activities;
        default:
            return state;
    }
}
