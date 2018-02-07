import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PrettyPrint from '../components/pretty-print';

class Logs extends Component {
  static displayName = 'Logs';

  static propTypes = {
    name: PropTypes.string
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Logs</Text>

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

const mapStateToProps = ({ logs }) => {
  return { logs };
};

export default connect(mapStateToProps)(Logs);
