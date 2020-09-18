import React, {Component} from 'react';
import {Card, CardSection, Input, Button, Spinner} from './common';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import firebase from 'firebase';
import {View, Text, StyleSheet} from 'react-native';

class LoginForm extends Component {
  renderError() {
    if (this.props.error) {
      return (
        <View>
          <Text style={styles.error}>{this.props.error}</Text>
        </View>
      );
    }
  }
  onEmailChange(text) {
    console.log(text);
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    console.log(text);
    this.props.passwordChanged(text);
  }

  onButtonPress() {
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

    if (firebase.apps.length === 0) {
      firebase.initializeApp(config);
    }

    const {email, password} = this.props;
    console.log(password);

    this.props.loginUser({email, password});
  }

  rederButton() {
    if (this.props.loading) {
      return <Spinner></Spinner>;
    }

    return <Button onPress={this.onButtonPress.bind(this)}>Login</Button>;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}></Input>
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
            placeholder="password"></Input>
        </CardSection>

        <CardSection>{this.rederButton()}</CardSection>

        {this.renderError()}
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 20,
  },
});

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
  };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
})(LoginForm);
