import { generateId } from '../services/id';
import moment from 'moment';

export const actionTypes = {
  ADD_LOG: 'logs.ADD_LOG',
  DELETE_LOG: 'logs.DELETE_LOG'
};

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

export function deleteLog({ id }) {
  return {
    type: actionTypes.DELETE_LOG,
    payload: id
  };
}

const INITIAL_STATE = {};

export default function reducer(state = INITIAL_STATE, { type, payload } = {}) {
  switch (type) {
    case actionTypes.ADD_LOG:
      return { ...state, [payload.id]: payload };
    case actionTypes.DELETE_LOG:
      return removeLogFromState(state, payload);
    default:
      return state;
  }
}

function removeLogFromState(logs, logId) {
  const newLogs = { ...logs };
  delete newLogs[logId];
  return newLogs;
}
