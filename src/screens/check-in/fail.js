import React from 'react';
import { View, Text } from 'react-native';
import { Container, Content } from 'native-base';

export default class CheckInFail extends React.Component {
  static navigationOptions = {
    headerTitle: 'Failure'
  };

  render() {
    return (
      <Container>
        <Content>
          <View>
            <Text>Booooo!!!!!</Text>
          </View>
          <View>
            <Text>Let's try to do better tomorrow.</Text>
          </View>
        </Content>
      </Container>
    );
  }
}
