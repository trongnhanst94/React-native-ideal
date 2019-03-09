import { combineReducers } from 'redux';
import AuthReducer from '../containers/Auth/AuthReducer';

const allReducers = combineReducers({
  AuthReducer,
});
export default allReducers;