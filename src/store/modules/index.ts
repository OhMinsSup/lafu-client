import { combineReducers } from 'redux';
import user from './user';
import core from './core';
import error from './error';

const rootReducer = combineReducers({
  user,
  core,
  error,
});

export type StortState = ReturnType<typeof rootReducer>;

export default rootReducer;
