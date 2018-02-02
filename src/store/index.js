import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducers from './reducers';

export default function Store(props) {
  return <Provider store={store}>{props.children}</Provider>;
}

Store.propTypes = {
  children: PropTypes.node
};

// ------- config -------

// creates the logger only for dev
const loggerMiddleware = createLogger({
  predicate: () => __DEV__
});

function configureStore(initialState) {
  const enhancers = compose(applyMiddleware(thunkMiddleware, loggerMiddleware));

  const reducer = combineReducers(reducers);

  return createStore(reducer, initialState, enhancers);
}

const store = configureStore({});
