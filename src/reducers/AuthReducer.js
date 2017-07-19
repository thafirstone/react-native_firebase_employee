import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_START,
  LOGIN_USER_FAIL } from './../actions/types.js';

const INITIAL_STATE = { email: '', password: '', user: null, error: '', loading: false };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload, error: '' };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, ...INITIAL_STATE, error: '' };
    case LOGIN_USER_FAIL:
      return { ...state, error: action.payload, password: '', loading: false };
    case LOGIN_USER_START:
      return { ...state, loading: true, error: '' };
    default:
      return state;
  }
};
