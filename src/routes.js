import { TabNavigator } from 'react-navigation';

// import RNDefault from './screens/react-native-default';
import CheckIn from './screens/check-in';
import Logs from './screens/logs';
import Plan from './screens/plan';

const Navigator = TabNavigator(
  {
    checkIn: {
      screen: CheckIn
    },
    logs: {
      screen: Logs
    },
    plan: {
      screen: Plan
    }
  },
  {
    initialRouteName: 'plan'
  }
);

export default Navigator;
