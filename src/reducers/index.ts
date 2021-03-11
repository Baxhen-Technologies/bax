import { combineReducers } from 'redux';
import { App } from '../actions';
import { appReducer } from './app';

export interface StoreState {
  app: App;
}

export const reducers = combineReducers({ app: appReducer });
