import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_START,
  LOGIN_USER_FAIL } from './types';

/* ACTION */
export const emailChanged = (text) => ({
  type: EMAIL_CHANGED,
  payload: text,
});

export const passwordChanged = (text) => ({
  type: PASSWORD_CHANGED,
  payload: text,
});

export const loginSuccess = (user) => ({
  type: LOGIN_USER_SUCCESS,
  payload: user,
});

export const loginUser = ({ email, password }) => (dispatch) => {
  dispatch({ type: LOGIN_USER_START });
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch((error) => {
      console.log(error);
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(() => loginUserFail(dispatch, (error ? error.message : 'Authentication failed.')));
    });
};

/* DISPATCHER */
const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
  Actions.employeeList();
};

const loginUserFail = (dispatch, error) => {
  dispatch({ type: LOGIN_USER_FAIL, payload: error });
};
