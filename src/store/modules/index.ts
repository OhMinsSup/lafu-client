import { combineReducers } from 'redux';
import user from './user';
import error from './error';

const rootReducer = combineReducers({
    user,
    error
})

export type StortState = ReturnType<typeof rootReducer>

export default rootReducer