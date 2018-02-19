import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-reactnativeasyncstorage';

import reducers from './reducers';

// creates the logger only for dev
const loggerMiddleware = createLogger({
  predicate: () => __DEV__
});

const engine = createEngine('my-save-key');
const engineMiddleware = storage.createMiddleware(engine);

export default function configureStore(initialState) {
  const reducer = storage.reducer(combineReducers(reducers));

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
