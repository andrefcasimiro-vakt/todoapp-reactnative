/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { type StatelessFunctionalComponent } from 'react';

const Todo = ({ todo }) => <div />;

type Props = {
    todos: Array<string>,
}

const Todos: StatelessFunctionalComponent<Props> = ({ todos }: Props) => todos.map((todo: string, index: number) =>
    <Todo key={index} todo={todo} />
);

export default Todos;
