import { createAction } from "@reduxjs/toolkit";

const registerRequest = createAction('auth/registerRequest');
const registerSuccess = createAction('auth/registerSuccess');
const registerError = createAction('auth/registerError');


const loginReqest = createAction('auth/loginReqest');
const loginSuccess = createAction('auth/loginSuccess');
const loginError = createAction('auth/loginError');

const logoutRequest = createAction('auth/logoutRequest');
const logoutSuccess = createAction('auth/logoutSuccess');
const logoutError = createAction('auth/logoutError');

const getCurrentUserRequest = createAction('auth/getcurrentUserRequest');
const getCurrentUserSuccess = createAction('auth/getcurrentUserSuccess');
const getCurrentUserError = createAction('auth/getcurrentUserError');


const phonebookActions = {
  registerRequest,
  registerSuccess,
  registerError,

  loginReqest,
  loginSuccess,
  loginError,

  logoutRequest,
  logoutSuccess,
  logoutError,

  
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError
  
}

export default phonebookActions