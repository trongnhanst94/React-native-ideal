import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose } from 'recompose';

import * as AuthStateActions from './AuthReducer';
import AuthScreen from '../screens/AuthScreen';

export default compose(
  connect(
    state => ({
      userData: state
    }),
    dispatch => ({
      authStateActions: bindActionCreators(AuthStateActions, dispatch),
    }),
  ),
)(AuthScreen);
