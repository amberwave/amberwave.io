import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import networkReducer from './networkReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  network: networkReducer,
});
