import { combineReducers } from 'redux';

import { configureStore } from './createStore';

import reducers from '../reducers';

const createStore = () => {
  const rootReducer = combineReducers(reducers);

  return configureStore(rootReducer);
};

const { store } = createStore();

export default store;
