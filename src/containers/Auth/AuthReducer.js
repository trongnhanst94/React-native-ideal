// Initial

const initialState = {
  isLogin: false,
  isInitial: false,
  userName: null,
  passWord: null,
  level: null,
  fullName: null,
  avatar: null,
  message: null
};

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
export const loggedInError = (userData) => {
  return {
    type: LOGGED_IN_ERROR,
    payload: userData
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


// Reducer
export default AuthStateReducer = (state = initialState, actions = {}) => {
  const { data } = actions;
  switch (actions.type) {
    case LOGGED_IN_REQUEST:
      return { ...state, 
        isLogin: false,
        isInitial: false,
        userName: data.userName,
        passWord: data.passWord,
        level: data.level,
        fullName: data.fullName,
        avatar: data.avatar,
        message: 'Logging in...'
      };

    case LOGGED_IN_SUCCESS:
      return { ...state, 
        isLogin: true,
        isInitial: false,
        userName: data.userName,
        passWord: data.passWord,
        level: data.level,
        fullName: data.fullName,
        avatar: data.avatar,
        message: 'Login Success'
      };

    case LOGGED_IN_ERROR:
      return { ...state, ...initialState, message: 'Login Error' };

    case LOGGED_OUT_REQUEST:
      return { ...state, ...initialState };
  
    default:
      return state;
  }
}