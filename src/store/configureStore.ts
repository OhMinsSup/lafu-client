import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import modules from './modules';
import rootSaga from '../saga';

export type PreloadedState = any;

const saga = createSagaMiddleware();
const middlewares = [saga];

const configureStore = (preloadedState?: PreloadedState) => {
  const store = createStore(
    modules,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );

  saga.run(rootSaga);
  return store;
};

export default configureStore;