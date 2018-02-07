import React from 'react';
import { Root } from 'native-base';
// Root: gives us actionSheets to be able to be called from anywhere

import Store from './src/store';
import Navigator from './src/routes';

export default class App extends React.Component {
  render() {
    return (
      <Store>
        <Root>
          <Navigator />
        </Root>
      </Store>
    );
  }
}
