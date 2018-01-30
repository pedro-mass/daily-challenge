import React from 'react';
import { View, Text } from 'react-native';
import { Container, Content } from 'native-base';

export default class CheckInSuccess extends React.Component {
  static navigationOptions = {
    headerTitle: 'Success'
  };

  render() {
    return (
      <Container>
        <Content>
          <View>
            <Text>Success!!</Text>
          </View>
          <View>
            <Text>Let's keep it going</Text>
          </View>
        </Content>
      </Container>
    );
  }
}
