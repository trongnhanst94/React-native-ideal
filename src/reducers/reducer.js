import { combineReducers } from 'redux';
import AuthReducer from '../containers/Auth/AuthReducer';

export const allReducers = combineReducers({

  auth: AuthReducer,
});
