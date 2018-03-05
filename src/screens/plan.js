import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Content, Form, Item, Input, Label } from 'native-base';

import PrettyPrint from '../components/pretty-print';
import PlanHeader from './components/plan-header';
import FooterActions from '../components/footer-actions';
import { updatePlan } from '../store/plan';

class Plan extends Component {
  state = {
    name: ''
  };

  static displayName = 'Plan';

  static propTypes = {
    updatePlan: PropTypes.func.isRequired,
    plan: PropTypes.shape({
      name: PropTypes.string
    })
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.plan != nextProps.plan) {
      this.initializeState(nextProps);
    }
  }

  should;

  render() {
    return (
      <Container>
        <PlanHeader />
        <Content>
          <Form>
            <Item inlineLabel>
              <Label>Plan Name</Label>
              <Input
                placehold={this.props.plan.name}
                value={this.state.name}
                onChangeText={name => this.setState({ name })}
              />
            </Item>
          </Form>
          <PrettyPrint name={this.props.plan.name} />
        </Content>
        <FooterActions
          acceptText="SAVE"
          rejectText="CANCEL"
          onAccept={this.saveForm}
          onReject={this.resetForm}
        />
      </Container>
    );
  }

  initializeState(props = this.props) {
    this.setState({ ...props.plan });
  }

  resetForm = () => {
    this.initializeState();
  };

  saveForm = () => {
    // TODO: Not updating props
    this.props.updatePlan(this.state);
  };
}

const mapStateToProps = ({ plan }) => {
  return { plan };
};

export default connect(mapStateToProps, { updatePlan })(Plan);
