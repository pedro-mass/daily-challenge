import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-reactnativeasyncstorage';
import { key } from '../services/local-storage';

import reducers from './reducers';

// creates the logger only for dev
const loggerMiddleware = createLogger({
  // predicate: () => __DEV__
  predicate: () => false
});

export default function configureStore(initialState) {
  const reducer = storage.reducer(combineReducers(reducers));

  const engine = createEngine(key);
  const engineMiddleware = storage.createMiddleware(engine);

  const enhancers = compose(
    applyMiddleware(thunkMiddleware, loggerMiddleware, engineMiddleware)
  );

  const store = createStore(reducer, initialState, enhancers);

  const load = storage.createLoader(engine);
  load(store);
  // .then(newState => console.log('Loaded state:', newState))
  // .catch(() => console.log('Failed to load previous state'));

  return store;
}
