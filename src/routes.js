import { TabNavigator } from 'react-navigation';

// import RNDefault from './screens/react-native-default';
import CheckIn from './screens/check-in';

const Navigator = TabNavigator(
  {
    // rnDefault: {
    //   screen: RNDefault
    // },
    // ...checkInRoutes
    checkIn: {
      screen: CheckIn
    }
  },
  {
    initialRouteName: 'checkIn'
  }
);

export default Navigator;
