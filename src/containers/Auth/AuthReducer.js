import { 
  LOGGED_IN_REQUEST,
  LOGGED_IN_SUCCESS,
  LOGGED_IN_ERROR
} from '../Auth/AuthAction'

// Initial
const initialState = {
  isLogin: false,
  isInitial: false,
  id: null,
  img: null,
  ten: null,
  level: null,
  created: null,
  message: null,
  ma_user: null,
  updated: null,
  password: null,
  chucdanh: null,
  username: null,
  shortName: null,
  trangthai: null,
};



// Reducer
export default AuthStateReducer = (state = initialState, actions = {}) => {
  switch (actions.type) {
    case LOGGED_IN_SUCCESS:
      return { ...state, 
        isLogin: true,
        isInitial: false,
        id: actions.userData[0].id,
        img: actions.userData[0].img,
        ten: actions.userData[0].ten,
        level: actions.userData[0].level,
        created: actions.userData[0].created,
        message: actions.userData[0].message,
        ma_user: actions.userData[0].ma_user,
        updated: actions.userData[0].updated,
        password: actions.userData[0].password,
        chucdanh: actions.userData[0].chucdanh,
        username: actions.userData[0].username,
        shortName: actions.userData[0].shortName,
        trangthai: actions.userData[0].trangthai,
        message: 'Login Success'
      };

    case LOGGED_IN_ERROR:
      return { ...state, ...initialState, message: 'Login Error' };

    default:
      return state;
  }
}