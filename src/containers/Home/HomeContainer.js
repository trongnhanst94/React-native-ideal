import { connect } from 'react-redux';

// import { loggedInRequest } from './AuthAction';
import HomeScreen from '../../screens/HomeScreen';

// const mapStateToProps = (state) => {        
//   return {        
//     userData: state.AuthReducer
//   }
// };

// const mapDispatchToProps = (dispatch) => {
//   return {    
//     authStateActions: (username, password) => {
//       return dispatch(loggedInRequest({ username, password }));
//     }
//   };
// }
const HomeContainer = connect(null, null)(HomeScreen);
export default HomeContainer;