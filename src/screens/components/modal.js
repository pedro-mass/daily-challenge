import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';
import RNModal from 'react-native-modal';

export default class Modal extends React.Component {
  static propTypes = {
    isVisible: PropTypes.bool,
    title: PropTypes.node,
    message: PropTypes.node,
    onClose: PropTypes.func
  };

  static defaultProps = {
    onClose: () => {}
  };

  state = {
    isVisible: this.props.isVisible
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.isVisible !== this.state.isVisible) {
      this.setState({ isVisible: nextProps.isVisible });
    }
  }

  render() {
    return (
      <RNModal isVisible={this.state.isVisible}>
        <View style={styles.container}>
          <View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{this.props.title}</Text>
            </View>
            <View style={styles.messageContainer}>
              <Text style={styles.message}>{this.props.message}</Text>
            </View>
          </View>

          <Icon
            style={styles.closeButton}
            onPress={() => this.closeModal()}
            name="ios-close-circle-outline"
          />
        </View>
      </RNModal>
    );
  }

  closeModal = () => {
    this.setState({ isVisible: false });
    this.props.onClose();
  };
}

const styles = {
  container: {
    backgroundColor: 'white',
    padding: 40
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    left: 10
  },
  titleContainer: {
    marginBottom: 20
  },
  title: {
    fontSize: 30,
    textAlign: 'center'
  },
  messageContainer: {},
  message: {
    // fontSize: 10
    textAlign: 'center'
  }
};
