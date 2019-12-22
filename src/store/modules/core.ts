import {
  createStandardAction,
  ActionType,
  createReducer,
} from 'typesafe-actions';

const SET_IS_DARK_MODE = 'core/SET_IS_DARK_MODE';

export const setDarkMode = createStandardAction(SET_IS_DARK_MODE)<boolean>();

const coreActions = {
  setDarkMode,
};

type CoreActions = ActionType<typeof coreActions>;

export interface CoreState {
  isDark: boolean;
}

const initialState: CoreState = {
  isDark: false,
};

const reducer = createReducer<CoreState, CoreActions>(initialState, {
  [SET_IS_DARK_MODE]: (state, action) => ({
    ...state,
    isDark: action.payload,
  }),
});

export default reducer;
