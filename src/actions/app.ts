import { ActionTypes } from './types';

export interface App {
  isInitialLoad: boolean;
}

export interface SetInitialLoadAction {
  type: ActionTypes.setInitialLoad;
  payload: boolean;
}

export const setInitialLoad = (value: boolean): SetInitialLoadAction => {
  return { type: ActionTypes.setInitialLoad, payload: value };
};
