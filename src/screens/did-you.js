import React from 'react';
import { View, Text } from 'react-native';

import PrettyPrint from '../components/pretty-print';

class DidYou extends React.Component {
  render() {
    return (
      <View>
        <Text>Did You page!</Text>

        <PrettyPrint {...this.props} />
      </View>
    );
  }
}

export default DidYou;
