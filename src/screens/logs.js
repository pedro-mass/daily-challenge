import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, ListView } from 'react-native';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Button,
  Icon
} from 'native-base';
import moment from 'moment';

import { deleteLog } from '../store/logs';
import { getFilledLogs } from '../store/selectors';

class Logs extends Component {
  static displayName = 'Logs';

  static propTypes = {
    logs: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        timestamp: PropTypes.number.isRequired,
        wasCompleted: PropTypes.bool,
        activity: PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string
        })
      })
    ),
    deleteLog: PropTypes.func
  };

  static defaultProps = {
    logs: []
  };

  render() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    return (
      <Container>
        {/* Temporary header. Not sure if we'll keep it, but it does gives us a nice top margin */}
        <Header />
        <Content contentContainerStyle={styles.content}>
          <List
            dataSource={ds.cloneWithRows(this.props.logs)}
            renderRow={this.renderLog}
            renderLeftHiddenRow={this.renderLeftHiddenRow}
            renderRightHiddenRow={this.renderRightHiddenRow}
            leftOpenValue={75}
            rightOpenValue={-75}
            enableEmptySections
          />
        </Content>
      </Container>
    );
  }

  renderLog = log => {
    return (
      <ListItem key={log.id}>
        <Left>
          <Text>{this.renderTimestamp(log.timestamp)}</Text>
        </Left>
        <Body>
          <Text>{log.activity.name}</Text>
        </Body>
        <Right>{this.renderWasCompleted(log.wasCompleted)}</Right>
      </ListItem>
    );
  };

  renderWasCompleted(wasCompleted) {
    return <Text>{wasCompleted ? 'yes' : 'no'}</Text>;
  }

  renderLeftHiddenRow = log => {
    // note: placeholder for editing a log.
    return (
      <Button full onPress={() => alert(JSON.stringify(log))}>
        <Icon active name="information-circle" />
      </Button>
    );
  };

  renderRightHiddenRow = log => {
    return (
      <Button full danger onPress={() => this.deleteRow(log)}>
        <Icon active name="trash" />
      </Button>
    );
  };

  deleteRow = log => {
    this.props.deleteLog(log);
  };

  renderTimestamp(timestamp) {
    return moment(timestamp).format('MM/DD/YY LT');
  }
}

const styles = {
  content: {
    // flex: 1,
    // flexDirection: 'column'
    // marginTop: 20
  }
};

const mapStateToProps = state => {
  return { logs: getFilledLogs(state) };
};

export default connect(mapStateToProps, { deleteLog })(Logs);
