import { combineReducers } from 'redux';

import login from './login';
import loading from './loading';
import modal from './modal';

import user from '../../Feature/User/state/reducer';
import menu from '../../Feature/Menu/state/reducer';

const rootReducer = combineReducers({
  login,
  loading,
  user,
  menu,
  modal
});

export default rootReducer;