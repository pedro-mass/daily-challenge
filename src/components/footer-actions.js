import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Footer, Button } from 'native-base';

class FooterActions extends Component {
  static displayName = 'FooterActions';

  static propTypes = {
    acceptText: PropTypes.string,
    rejectText: PropTypes.string,
    onAccept: PropTypes.func,
    onReject: PropTypes.func
  };

  static defaultProps = {
    acceptText: 'OK',
    rejectText: 'CANCEL',
    onAccept: () => {},
    onReject: () => {}
  };

  render() {
    return (
      <Footer style={styles.footer}>
        <View style={styles.actions}>
          <Button
            large
            style={styles.button}
            primary
            onPress={() => {
              this.props.onAccept();
            }}
          >
            <Text style={styles.buttonText}>{this.props.acceptText}</Text>
          </Button>
          <Button
            large
            style={styles.button}
            danger
            onPress={() => {
              this.props.onReject();
            }}
          >
            <Text style={styles.buttonText}>{this.props.rejectText}</Text>
          </Button>
        </View>
      </Footer>
    );
  }
}

const styles = {
  footer: {
    borderColor: '#ffffff',
    backgroundColor: '#ffffff',
    marginBottom: 20
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flex: 1
  },
  button: {
    width: '40%'
  },
  buttonText: {
    width: '100%',
    textAlign: 'center',
    color: 'white'
  }
};

export default FooterActions;
