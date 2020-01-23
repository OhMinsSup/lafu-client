import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import modules from './modules';

export type PreloadedState = any;

const configureStore = (preloadedState?: PreloadedState) => {
  const store = createStore(
    modules,
    preloadedState,
    composeWithDevTools(),
  );

  return store;
};

export default configureStore;
