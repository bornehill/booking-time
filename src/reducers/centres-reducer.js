import * as types from '../actions/actions-types';
import initialState from './initialState';

export default function centresReducer(state = initialState.centres, action)
{
    switch(action.type)
    {
        case types.LOAD_CENTRES_SUCCESS:
            return action.centres;
        default:
            return state;
    }
}
