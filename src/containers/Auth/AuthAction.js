// Constant actions
export const LOGGED_IN_REQUEST = 'LOGGED_IN_REQUEST';
export const LOGGED_IN_SUCCESS = 'LOGGED_IN_SUCCESS';
export const LOGGED_IN_ERROR = 'LOGGED_IN_ERROR';
export const LOGGED_OUT_REQUEST = 'LOGGED_OUT_REQUEST';
export const LOGGED_OUT_SUCCESS = 'LOGGED_OUT_SUCCESS';
export const LOGGED_OUT_ERROR = 'LOGGED_OUT_ERROR';

// Action creators
export const loggedInRequest = (userData) => {
  return {
    type: LOGGED_IN_REQUEST,
    payload: userData
  };
}
export const loggedInSuccess = (userData) => {
  return {
    type: LOGGED_IN_SUCCESS,
    payload: userData
  };
}
export const loggedInError = () => {
  return {
    type: LOGGED_IN_ERROR
  };
}


export const loggedOutRequest = (userData) => {
  return {
    type: LOGGED_OUT_REQUEST,
    payload: userData
  };
}
export const loggedOutSuccess = (userData) => {
  return {
    type: LOGGED_OUT_SUCCESS,
    payload: userData
  };
}
export const loggedOutError = () => {
  return {
    type: LOGGED_OUT_ERROR
  };
}