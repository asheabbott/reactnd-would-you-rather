import {combineReducers} from 'redux';
import loading from './loading';
import authUser from './authUser';
import users from './users';
import questions from './questions';

export default combineReducers({
  loading,
  authUser,
  users,
  questions,
});