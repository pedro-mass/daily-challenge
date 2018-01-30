import { StackNavigator } from 'react-navigation';

import RNDefault from './screens/react-native-default';
import { routes as checkInRoutes } from './screens/check-in/routes';

const Navigator = StackNavigator(
  {
    rnDefault: {
      screen: RNDefault
    },
    ...checkInRoutes
  },
  {
    initialRouteName: 'checkIn'
  }
);

export default Navigator;
