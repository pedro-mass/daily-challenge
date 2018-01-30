import CheckIn from '.';
import CheckInSuccess from './success';
import CheckInFail from './fail';

export const routeNames = {};

export const routes = {
  checkIn: {
    screen: CheckIn
  },
  checkInSuccess: {
    screen: CheckInSuccess
  },
  checkInFail: {
    screen: CheckInFail
  }
};
