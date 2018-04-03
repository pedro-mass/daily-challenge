import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Header, Body } from 'native-base';

class PlanHeader extends Component {
  static displayName = 'PlanHeader';

  static propTypes = {
    name: PropTypes.string
  };

  render() {
    return (
      <Header>
        <Body>
          <Text>{this.props.name}</Text>
        </Body>
      </Header>
    );
  }
}

function mapStateToProps({ plan }) {
  return { name: plan.name };
}

export default connect(mapStateToProps)(PlanHeader);
