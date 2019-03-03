import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import home from './home';
import session from './session';

export default combineReducers(
  {
    counter,
    home,
    session,
    routing: routerReducer
  }
)