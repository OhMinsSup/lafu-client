import { createAction, createReducer, ActionType } from 'typesafe-actions';

const SET_INITIAL_BODY = 'write/SET_INITIAL_BODY ';
const CHANGE_TITLE = 'write/CHANGE_TITLE';
const CHANGE_TAGS = 'write/CHANGE_TAGS';

export const actions = {
  changeTags: createAction(CHANGE_TAGS, action => {
    return (tags: string[]) => action(tags);
  }),
  changeTitle: createAction(CHANGE_TITLE, action => {
    return (title: string) => action(title);
  }),
  setInitialBody: createAction(SET_INITIAL_BODY, action => {
    return (initialBody: string) => action(initialBody);
  }),
};

type WriteActions = ActionType<typeof actions>;

export interface WriteState {
  initialBody: string;
  title: string;
  tags: string[];
}

const initialState: WriteState = {
  initialBody: '',
  title: '',
  tags: [],
};

const write = createReducer<WriteState, WriteActions>(
  initialState,
).handleAction(
  [actions.setInitialBody, actions.changeTitle, actions.changeTags],
  (state, action) => {
    switch (action.type) {
      case 'write/CHANGE_TAGS':
        return {
          ...state,
          tags: action.payload,
        };
      case 'write/CHANGE_TITLE':
        return {
          ...state,
          title: action.payload,
        };
      case 'write/SET_INITIAL_BODY ':
        return {
          ...state,
          initialBody: action.payload,
        };
      default: {
        return state;
      }
    }
  },
);

export default write;
