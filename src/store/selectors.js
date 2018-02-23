import { createSelector } from 'reselect';

import moment from 'moment';

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

export const getLatestLog = createSelector([getLogs], logs => {
  logs = Object.values(logs);
  return logs && logs.length > 0 ? logs[logs.length - 1] : null;
});

export const getTodaysActivity = createSelector(
  [getLatestLog, getActivities],
  (latestLog, activities) => {
    if (!latestLog) {
      return Object.values(activities)[0];
    }

    if (moment().isSame(latestLog.timestamp, 'day')) {
      return latestLog.activity;
    }

    const activityKeyArray = Object.keys(activities);
    const currentActivityIndex = activityKeyArray.indexOf(latestLog.activityId);
    const nextActivityIndex =
      (currentActivityIndex + 1) % activityKeyArray.length;

    return activities[activityKeyArray[nextActivityIndex]];
  }
);
