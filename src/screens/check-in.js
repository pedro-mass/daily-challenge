import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Container, Content } from 'native-base';
import { connect } from 'react-redux';

import { addLog } from '../store/logs';
import { getTodaysActivity } from '../store/selectors';
import FooterActions from '../components/footer-actions';
import Modal from './components/modal';
import PlanHeader from './components/plan-header';

class CheckIn extends React.Component {
  static displayName = 'CheckIn';

  static navigationOptions = {
    headerTitle: 'Check In'
  };

  static propTypes = {
    navigation: PropTypes.object,
    activity: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      wasCompleted: PropTypes.bool
    }),
    addLog: PropTypes.func
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
    const { activity } = this.props;

    if (!activity) return this.renderLoadingScreen();

    if (activity.wasCompleted !== undefined) {
      return this.renderCompletedScreen(activity);
    }

    return (
      <Container>
        <PlanHeader />
        <Content contentContainerStyle={styles.content}>
          <Modal
            isVisible={this.state.isModalVisible}
            {...this.state.modalContent}
          />

          <View style={styles.promptContainer}>
            <Text style={styles.prompt}>Did you do</Text>
          </View>
          <View style={{ ...styles.promptContainer, flex: 2 }}>
            <Text style={{ ...styles.prompt, fontSize: 30 }}>
              {activity.name}
            </Text>
          </View>
          <View style={styles.promptContainer}>
            <Text style={styles.prompt}>today?</Text>
          </View>
        </Content>
        <FooterActions
          acceptText="YES"
          rejectText="NO"
          onAccept={() => this.checkIn(activity, true)}
          onReject={() => this.checkIn(activity, false)}
        />
      </Container>
    );
  }

  renderCompletedScreen(activity) {
    return this.renderCenteredNode(
      <Text style={styles.centeredText}>
        Todays Done! You {activity.wasCompleted ? 'did' : 'failed at'} it!
      </Text>
    );
  }

  renderLoadingScreen() {
    return this.renderCenteredNode(
      <Text style={styles.centeredText}>Loading...</Text>
    );
  }

  renderCenteredNode(node) {
    return (
      <Container>
        <Content contentContainerStyle={styles.content}>
          <View style={styles.promptContainer}>{node}</View>
        </Content>
      </Container>
    );
  }

  checkIn(activity, isSuccess) {
    const modalContent = isSuccess ? data.success : data.fail;
    this.setState({ modalContent, isModalVisible: true });
    this.props.addLog(activity, { wasCompleted: isSuccess });
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
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  promptContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  prompt: {
    fontSize: 20
  },
  centeredText: {
    fontSize: 40,
    textAlign: 'center'
  }
};

function mapStateToProps(state) {
  return { activity: getTodaysActivity(state) };
}

export default connect(mapStateToProps, { addLog })(CheckIn);
