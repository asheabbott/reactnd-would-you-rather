import * as API from '../utils/_DATA';

// Constants
export const RECEIVE_DATA = 'RECEIVE_DATA';

// Action Creator
function receiveData(users, questions) {
  //Action Object
  return {
    type: RECEIVE_DATA,
    users,
    questions,
  }
}

// Async Action Creator
export function handleInitialData() {
  return (dispatch) => {
    return Promise.all([
      API._getUsers(),
      API._getQuestions()
    ]).then(([users, questions]) => {
      dispatch(receiveData(users, questions));
    });
  }
}