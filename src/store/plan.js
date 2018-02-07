export const actionTypes = { UPDATE_PLAN: 'plan.UPDATE' };

export function updatePlan(plan) {
  return {
    type: actionTypes.UPDATE_PLAN,
    payload: plan
  };
}

const INITIAL_STATE = {
  name: 'p90x3 - phase 1',
  activities: {
    '7dd0ebe5-a8f9-4849-8daf-d5ae0312927d': {
      id: '7dd0ebe5-a8f9-4849-8daf-d5ae0312927d',
      name: 'Total Synergistics'
    },
    '9a93a330-9190-4b95-a49a-0b9329e4f49a': {
      id: '9a93a330-9190-4b95-a49a-0b9329e4f49a',
      name: 'Agility X'
    },
    '8f7665b0-4c4a-4999-b4b1-28b675ca4d75': {
      id: '8f7665b0-4c4a-4999-b4b1-28b675ca4d75',
      name: 'Yoga X'
    },
    '8580ecb1-2c76-4e46-bc93-3074e13fa451': {
      id: '8580ecb1-2c76-4e46-bc93-3074e13fa451',
      name: 'The Challenge'
    },
    '13fb2917-c55b-4b70-bfc2-03cfc8ec29ba': {
      id: '13fb2917-c55b-4b70-bfc2-03cfc8ec29ba',
      name: 'CVX'
    },
    '99c8d7c0-389b-4ffa-9cbf-7d288fbb882f': {
      id: '99c8d7c0-389b-4ffa-9cbf-7d288fbb882f',
      name: 'The Warrior'
    },
    '6e390dfc-6cc2-49bb-abf9-88cd30799b14': {
      id: '6e390dfc-6cc2-49bb-abf9-88cd30799b14',
      name: 'Rest or Dynamix'
    }
  },
  repeatCount: 4,
  daySkipLimit: 2
};

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}
