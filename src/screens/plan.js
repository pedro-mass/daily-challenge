import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Body,
  Content,
  Form,
  Item,
  Input,
  Label
} from 'native-base';

import { updatePlan } from '../store/plan';

class Plan extends Component {
  static displayName = 'Plan';

  static propTypes = {
    updatePlan: PropTypes.func.isRequired,
    plan: PropTypes.shape({
      name: PropTypes.string
    })
  };

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Text>{this.props.plan.name}</Text>
          </Body>
        </Header>
        <Content>
          <Form>
            <Item inlineLabel>
              <Label>Plan Name</Label>
              <Input
                placehold={this.props.plan.name}
                value={this.props.plan.name}
              />
            </Item>
          </Form>
        </Content>
      </Container>
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
