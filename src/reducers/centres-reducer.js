import * as types from '../actions/actions-types';
import initialState from './initialState';

export default function centresReducer(state = initialState.centres, action)
{
    switch(action.type)
    {
        case types.LOAD_CENTRES_SUCCESS:
            return action.centres;
        case types.LOAD_CENTRE_SCHEDULE_SUCCESS:
          return state.map((centre, index) => {
                if(action.centreSchedule.length && centre.id == action.centreSchedule[0].centreId)
                {
                  return Object.assign({}, centre, { centreSchedule: action.centreSchedule });
                }
                return centre;
          });

        default:
            return state;
    }
}
