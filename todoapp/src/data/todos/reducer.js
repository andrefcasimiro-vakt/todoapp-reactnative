// @flow
import type { Todo } from './types';
import * as actions from './actions';
import type { ExtractActionTypes } from '../../common/redux/types';

export type TodoState = Todo[]

const initialState: TodoState = []

type Action = ExtractActionTypes<typeof actions>;

function todoReducer(
  state: TodoState = initialState,
  action: Action
): TodoState {
  switch(action.type) {
    case "CREATE_TODO_ACTION":
      return state.concat(action.payload);
    case "EDIT_TODO_ACTION":
      const newState = state.slice();
      const index = newState.indexOf(action.payload);
      if (index !== -1) {
        newState[index] = action.payload;
      }
      return newState;
    case "DELETE_TODO_ACTION":
      return state.filter(todo => todo !== action.payload);
    default:
      return state;
  }
}
