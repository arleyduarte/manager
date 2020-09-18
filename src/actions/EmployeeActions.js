import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_FETCH_SUCCESS,
} from './types';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {firebaseCreate} from '../FirebaseHelper';

export const employeeUpdate = ({prop, value}) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: {prop, value},
  };
};

export const employeeCreate = ({name, phone, shift}) => {
  const {currentUser} = firebase.auth();
  console.log('employeeCreate', currentUser.uid, phone, shift);

  return (dispatch) => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({name, phone, shift})
      .then(() => {
        dispatch({type: EMPLOYEE_CREATE});
        Actions.employeeList();
      });
  };
};

export const employeesFetch = () => {
  const {currentUser} = firebase.auth();

  console.log('Employee Actions employeesFetch', currentUser);
  return (dispatch) => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .on('value', (snapshot) => {
        dispatch({type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val()});
      });
  };
};