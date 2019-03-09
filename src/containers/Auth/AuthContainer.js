import { connect } from 'react-redux';

import { loggedInRequest } from './AuthAction';
import AuthScreen from '../../screens/AuthScreen';

const mapStateToProps = (state) => {        
  return {        
    userData: state.AuthReducer
  }
};

const mapDispatchToProps = (dispatch) => {
  return {    
    authStateActions: (username, password) => {
      return dispatch(loggedInRequest({ username, password }));
    }
  };
}
const AuthContainer = connect(mapStateToProps, mapDispatchToProps)(AuthScreen);
export default AuthContainer;