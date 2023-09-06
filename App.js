import React from 'react';
import {Provider} from 'react-redux';
import Counter from './scr/component/Counter';
import store from './scr/store/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}
