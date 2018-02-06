import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import PrettyPrint from '../components/pretty-print';

class Plan extends Component {
  static displayName = 'Plan';

  static propTypes = {
    name: PropTypes.string
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Plan</Text>

        <PrettyPrint {...this.props} />
      </View>
    );
  }
}

const styles = {
  container: {
    marginTop: 20
  }
};

export default Plan;
