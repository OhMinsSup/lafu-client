import { combineReducers } from 'redux';
import user from './user';
import core from './core';
import write from './write';
import error from './error';

const rootReducer = combineReducers({
  user,
  core,
  error,
  write,
});

export type RootStore = ReturnType<typeof rootReducer>;

export default rootReducer;
