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

    return {
      id: '7dd0ebe5-a8f9-4849-8daf-d5ae0312927d',
      name: 'Total Synergistics2',
      wasCompleted: false
    };
  }
);
