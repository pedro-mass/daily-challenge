import { AsyncStorage } from 'react-native';

export const key = 'my-save-key';

export function hardReset() {
  // note: this is actually a promise, but not caring about pass/fail right now
  AsyncStorage.removeItem(key);
}
