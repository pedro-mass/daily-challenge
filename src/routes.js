import { StackNavigator } from 'react-navigation';

import RNDefault from './screens/react-native-default';
import DidYou from './screens/did-you';

const Navigator = StackNavigator(
  {
    rnDefault: {
      screen: RNDefault
    },
    didYou: {
      screen: DidYou,
      navigationOptions: {
        title: 'Did You?'
      }
    }
  },
  {
    initialRouteName: 'didYou'
  }
);

export default Navigator;
