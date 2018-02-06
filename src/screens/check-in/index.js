import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Container, Content, Footer, Button } from 'native-base';

import Modal from './modal';

class DidYou extends React.Component {
  static navigationOptions = {
    headerTitle: 'Check In'
  };

  static propTypes = {
    navigation: PropTypes.object
  };

  defaultButtonProps = {
    large: true,
    block: true,
    style: styles.button,
    color: '#FFFFFF'
  };

  state = {
    isModalVisible: false,
    modalContent: data.success
  };

  render() {
    return (
      <Container>
        {/* <PrettyPrint {...this.props} /> */}

        <Content
          contentContainerStyle={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white'
          }}
        >
          <Modal
            isVisible={this.state.isModalVisible}
            {...this.state.modalContent}
          />

          <View style={styles.promptContainer}>
            <Text style={styles.prompt}>Did you do</Text>
          </View>
          <View style={{ ...styles.promptContainer, flex: 2 }}>
            <Text style={{ ...styles.prompt, fontSize: 30 }}>[Activity X]</Text>
          </View>
          <View style={styles.promptContainer}>
            <Text style={styles.prompt}>today?</Text>
          </View>
        </Content>
        <Footer>
          <Button
            {...this.defaultButtonProps}
            primary
            onPress={() => this.showModal(true)}
          >
            <Text style={styles.buttonText}>YES</Text>
          </Button>
          <Button
            {...this.defaultButtonProps}
            danger
            onPress={() => this.showModal(false)}
          >
            <Text style={styles.buttonText}>NO</Text>
          </Button>
        </Footer>
      </Container>
    );
  }

  showModal(isSuccess) {
    const modalContent = isSuccess ? data.success : data.fail;
    this.setState({ modalContent });
    this.setState({ isModalVisible: true });
  }
}

const data = {
  success: {
    title: 'Long congrats',
    message:
      'message that\'s quite long asdjknasldnasldn nsaklnd aklsnd lkasnd lkans dklndaslkd nalks nlaksn dlkasn lkdsna'
  },
  fail: {
    title: 'Booo',
    message:
      'message that\'s quite long asdjknasldnasldn nsaklnd aklsnd lkasnd lkans dklndaslkd nalks nlaksn dlkasn lkdsna'
  }
};

const styles = {
  container: {},
  content: {},
  actions: {},
  promptContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  prompt: {
    fontSize: 20
  },
  button: {
    flex: 1
  },
  buttonText: {
    color: 'white'
  }
};

export default DidYou;
