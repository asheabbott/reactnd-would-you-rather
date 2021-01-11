import {SIGN_IN, SIGN_OUT} from '../actions/authUser';
import {RECEIVE_DATA} from '../actions/shared';

// Reducer
function authUser(state = '', action) {
  switch(action.type) {
    case SIGN_IN:
      return action.user;
    case SIGN_OUT:
      return '';
    case RECEIVE_DATA:
      return '';
    default:
      return state;
  }
}

export default authUser;