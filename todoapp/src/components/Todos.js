/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { type StatelessFunctionalComponent } from 'react';
import { connect } from 'react-redux';
import type { StoreState } from '../global/store'
import { View } from 'react-native';
import type { Todo } from '../data/todos/types';

type Props = {
    todos: Todo[],
}

const Todos: StatelessFunctionalComponent<Props> = ({ todos }: Props) => todos.map((todo, index) =>
    <View key={index}>{todo.id}</View>
);

const mapStateToProps = (state: StoreState) => ({ 
    todos: state.todos
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
