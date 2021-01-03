import {
  RECEIVE_DATA,
} from '../actions/shared';

// Reducer
function loading(state = true, action) {
  switch(action.type) {
    case RECEIVE_DATA:
      return false;
    default:
      return state;
  }
}

export default loading;