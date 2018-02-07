import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import configureStore from './config';

export default function Store(props) {
  return <Provider store={configureStore({})}>{props.children}</Provider>;
}

Store.propTypes = {
  children: PropTypes.node
};
