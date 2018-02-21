import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'native-base';

import PrettyPrint from '../components/pretty-print';
import { updatePlan } from '../store/plan';
import { hardReset } from '../services/local-storage';

class Plan extends Component {
  static displayName = 'Plan';

  static propTypes = {
    name: PropTypes.string,
    updatePlan: PropTypes.func.isRequired,
    plan: PropTypes.object
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Plan</Text>

        <Button onPress={() => hardReset()}>
          <Text>Reset Local Storage</Text>
        </Button>

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

const mapStateToProps = ({ plan }) => {
  return { plan };
};

export default connect(mapStateToProps, { updatePlan })(Plan);
