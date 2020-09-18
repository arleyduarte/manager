import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk';
import Router from './Router';
import {View} from 'react-native';

class App extends Component {
  componentDidUpdate() {
    const config = {
      apiKey: 'AIzaSyDDxDFBvqvSneXTZC7moqYYk7pww9I1dWo',
      authDomain: 'auth-e7bec.firebaseapp.com',
      databaseURL: 'https://auth-e7bec.firebaseio.com',
      projectId: 'auth-e7bec',
      storageBucket: 'auth-e7bec.appspot.com',
      messagingSenderId: '708656707639',
      appId: '1:708656707639:web:99601baf2129f8955227b2',
      measurementId: 'G-LYJ0WM3084',
    };

    console.log('firebase.initializeApp');
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router></Router>
      </Provider>
    );
  }
}

export default App;
