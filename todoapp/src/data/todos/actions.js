// @flow
import type { ReduxAction } from '../../common/redux/types';
import type { Todo } from './types';

type CreateTodoAction = ReduxAction<'CREATE_TODO_ACTION', Todo>;
type EditTodoAction = ReduxAction<'EDIT_TODO_ACTION', Todo>;
type DeleteTodoAction = ReduxAction<'DELETE_TODO_ACTION', string>;

export const createTodo = (payload: Todo): CreateTodoAction => ({
  type: 'CREATE_TODO_ACTION',
  payload
})

export const editTodo = (payload: Todo): EditTodoAction => ({
  type: 'EDIT_TODO_ACTION',
  payload
})

export const deleteTodo = (id: string): DeleteTodoAction => ({
  type: 'DELETE_TODO_ACTION',
  payload: id,
})
