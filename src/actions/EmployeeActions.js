import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS,
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

export const employeesUpdate = ({name, phone, shift, uid}) => {
  const {currentUser} = firebase.auth();

  console.log('Employee Actions employeesUpdate uid', uid);

  return (dispatch) => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({name, phone, shift})
      .then(() => {
        dispatch({type: EMPLOYEE_SAVE_SUCCESS});
        Actions.employeeList();
      });
  };
};

export const employeeDelete = ({uid}) => {
  const {currentUser} = firebase.auth();
  console.log('Employee Actions employeeDelete uid', uid);
  return (dispatch) => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        Actions.employeeList({type: 'reset'});
      });
  };
};
