import {
  createStandardAction,
  ActionType,
  createReducer,
} from 'typesafe-actions';

const SET_ERROR = 'error/SET_ERROR';
const CLEAR_ERROR = 'error/CLEAR_ERROR';

export const setError = createStandardAction(SET_ERROR)<ErrorState>();
export const clearError = createStandardAction(CLEAR_ERROR)();

const errorActions = {
  setError,
  clearError,
};

type ErrorActions = ActionType<typeof errorActions>;

export interface ErrorState {
  code: number;
  key: string;
  message: string;
}

const initialState: ErrorState = {
  code: -1,
  key: '',
  message: '',
};

const reducer = createReducer<ErrorState, ErrorActions>(initialState, {
  [SET_ERROR]: (state, action) => ({
    ...state,
    code: action.payload.code,
    key: action.payload.key,
    message: action.payload.message,
  }),
  [CLEAR_ERROR]: state => ({
    ...state,
    code: -1,
    key: '',
    message: '',
  }),
});

export default reducer;
