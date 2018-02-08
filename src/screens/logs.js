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
  Button,
  Icon
} from 'native-base';

import { deleteLog } from '../store/logs';

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

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     logs: props.logs
  //   };
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.logs !== this.state.logs) {
  //     this.setState({ logs: nextProps.logs });
  //   }
  // }

  render() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    return (
      <Container>
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

  renderLog(log) {
    return (
      <ListItem key={log.id}>
        <Left>
          <Text>{log.timestamp}</Text>
        </Left>
        <Body>
          <Text>{log.activity.name}</Text>
        </Body>
      </ListItem>
    );
  }

  renderLeftHiddenRow = log => {
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

  deleteRow(log) {
    this.props.deleteLog(log);
  }
}

const styles = {
  content: {
    // flex: 1,
    // flexDirection: 'column'
    // marginTop: 20
  }
};

const mapStateToProps = ({ logs, plan }) => {
  const logsToUse = Object.values(logs).map(log => {
    log.activity = plan.activities[log.activityId];

    return log;
  });

  return { logs: logsToUse };
};

export default connect(mapStateToProps, { deleteLog })(Logs);
