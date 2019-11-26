import {
  createReducer,
  createStandardAction,
  ActionType,
} from 'typesafe-actions';

const SET_LOGGED_IN = 'user/SET_LOGGED_IN';
const SET_LOGGED_OUT = 'user/SET_LOGGED_OUT';

export const setLoggedIn = createStandardAction(SET_LOGGED_IN)<boolean>();
export const setLoggedOut = createStandardAction(SET_LOGGED_OUT)<boolean>();

const userActions = {
  setLoggedIn,
  setLoggedOut,
};

type UserActions = ActionType<typeof userActions>;

export interface UserDataState {}

export interface UserState {
  isLoggedIn: boolean;
  user: UserDataState | null;
}

const initialState: UserState = {
  isLoggedIn: false,
  user: null,
};

const reducer = createReducer<UserState, UserActions>(initialState, {
  [SET_LOGGED_IN]: state => ({ ...state, isLoggedIn: true }),
  [SET_LOGGED_OUT]: state => ({ ...state, isLoggedIn: false }),
});

export default reducer;
