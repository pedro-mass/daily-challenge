import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducers from './reducers';

// creates the logger only for dev
const loggerMiddleware = createLogger({
  predicate: () => __DEV__
});

export default function configureStore(initialState) {
  const enhancers = compose(applyMiddleware(thunkMiddleware, loggerMiddleware));

  const reducer = combineReducers(reducers);

  return createStore(reducer, initialState, enhancers);
}
