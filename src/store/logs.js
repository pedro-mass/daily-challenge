import { generateId } from '../services/id';
import moment from 'moment';

export const actionTypes = { ADD_LOG: 'logs.ADD_LOG' };

export function addLog({ id }, wasCompleted) {
  return {
    type: actionTypes.ADD_LOG,
    payload: {
      id: generateId(),
      timestamp: moment().valueOf(),
      activityId: id,
      wasCompleted
    }
  };
}

const INITIAL_STATE = {};

export default function reducer(state = INITIAL_STATE, { type, payload } = {}) {
  switch (type) {
    case actionTypes.ADD_LOG:
      return { ...state, [payload.id]: payload };
    default:
      return state;
  }
}
