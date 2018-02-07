import { generateId } from '../services/id';
import moment from 'moment';

export const actionTypes = { ADD_LOG: 'logs.ADD_LOG' };

export function AddLog(activity, wasCompleted) {
  return {
    type: actionTypes.ADD_LOG,
    payload: {
      id: generateId(),
      timestamp: moment().valueOf(),
      activity,
      wasCompleted
    }
  };
}

const INITIAL_STATE = {
  'cf69dc28-1b02-4692-9eae-418e5e29820e': {
    id: 'cf69dc28-1b02-4692-9eae-418e5e29820e',
    timestamp: 1517539570991,
    activityId: '7dd0ebe5-a8f9-4849-8daf-d5ae0312927d',
    wasCompleted: true
  }
};

export default function reducer(state = INITIAL_STATE, { type, payload } = {}) {
  switch (type) {
    case actionTypes.ADD_LOG:
      return { ...state, [payload.id]: payload };
    default:
      return state;
  }
}
