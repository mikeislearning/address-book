import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

let store: any = null;

const configureStore = (rootReducer: any) => {
  const composer = __DEV__ ? composeWithDevTools : compose;

  // @ts-ignore
  store = createStore(rootReducer, composer(applyMiddleware(thunk)));

  return { store };
};

const getStore = () => store;

export { configureStore, getStore };
