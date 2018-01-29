import { StackNavigator } from 'react-navigation';

import RNDefault from './screens/react-native-default';
import CheckIn from './screens/check-in';

const Navigator = StackNavigator(
  {
    rnDefault: {
      screen: RNDefault
    },
    didYou: {
      screen: CheckIn
    }
  },
  {
    initialRouteName: 'didYou'
  }
);

export default Navigator;
