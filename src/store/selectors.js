import { createSelector } from 'reselect';

const getActivities = state => state.plan.activities;
const getLogs = state => state.logs;

export const getFilledLogs = createSelector(
  [getLogs, getActivities],
  (logs, activities) => {
    return Object.values(logs).map(log => {
      log.activity = activities[log.activityId];

      return log;
    });
  }
);
