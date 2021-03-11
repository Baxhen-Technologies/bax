import { App, Action, ActionTypes } from '../actions';

const INITIAL_STATE: App = {
  isInitialLoad: false,
};

export const appReducer = (state: App = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionTypes.setInitialLoad:
      return { ...state, isInitialLoad: action.payload };
    default:
      return state;
  }
};
