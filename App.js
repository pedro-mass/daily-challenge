import React from 'react';
// import { StyleSheet } from 'react-native';
import { Root } from 'native-base';

import Navigator from './src/routes';

export default class App extends React.Component {
  render() {
    return (
      // <Root style={styles.container}>
      <Root>
        <Navigator />
      </Root>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff'
//   }
// });
