/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import style from "./style.js";
import APP_CONFIG from '../../global/config';
import Todos from '../../components/Todos';
import AddTodo from '../../components/AddTodo';
import { TEST_IDS } from './constants';

type Props = {}

type State = {|
  version: number,
  error: ?string,
|}

class AppContainer extends Component<Props, State> {
  constructor() {
    super();
      this.state = {
        version: 0,
        error: null,
      }
  }
  componentDidMount() {
    this.setState({ version: APP_CONFIG.APP.VERSION })
  }

  componentDidCatch(error: Error, info: Object) {
    this.setState({ error: error.message })
  }

  render() {
    const {error} = this.state;

    if (error) {
      return (
        <View testID={TEST_IDS.ERROR_VIEW} style={style.errorView}>
            <Text style={style.errorText}>{error}</Text>
        </View>
      );
    }

    return (
      <React.Fragment>
        <AddTodo />
        <Todos todos={[]} />
      </React.Fragment>
    );
  }
}

export default AppContainer;
