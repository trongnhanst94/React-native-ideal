// @flow
import { combineReducers } from 'redux';
// import NavigationStateReducer from './navigation';
// import CalendarReducer from './calendar';
// import GridReducer from './grid';
// import GalleryReducer from './gallery';
import AuthReducer from '../containers/Auth/AuthReducer';

export const allReducers = combineReducers({
  // navigation: NavigationStateReducer,
  // calendar: CalendarReducer,
  // grid: GridReducer,
  // gallery: GalleryReducer,

  auth: AuthReducer,
});
