import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import RouterComponent from './Router';

class App extends Component {
  state = { }
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAKs_6TNOKg6QLBSlwONWiM7E_lU4S1jSw',
      authDomain: 'manage-project-reactnative.firebaseapp.com',
      databaseURL: 'https://manage-project-reactnative.firebaseio.com',
      projectId: 'manage-project-reactnative',
      storageBucket: '',
      messagingSenderId: '1027082252030',
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
}

export default App;
