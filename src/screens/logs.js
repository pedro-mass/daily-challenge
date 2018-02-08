import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body
} from 'native-base';

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
    )
  };

  static defaultProps = {
    logs: []
  };

  render() {
    return (
      <Container>
        <Header />
        <Content contentContainerStyle={styles.content}>
          <List dataArray={this.props.logs} renderRow={this.renderLog} />
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

export default connect(mapStateToProps)(Logs);
