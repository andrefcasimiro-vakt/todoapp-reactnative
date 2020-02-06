// @flow
import { createStore, combineReducers } from 'redux';
import todoReducer, { type TodoState }  from '../../data/todos/reducer';

export type StoreState = {|
  todos: TodoState
|}

const store: StoreState = createStore(combineReducers({
  todos: todoReducer
}));

export default store;
