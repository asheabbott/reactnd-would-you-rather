import {_saveQuestionAnswer as saveQuestionAnswer} from '../utils/_DATA';

// Constants
export const ADD_ANSWER = 'ADD_ANSWER';

// Action Creator
function addAnswer(authedUser, qid, answer) {
  // Action Object
  return {
    type: ADD_ANSWER,
    authedUser,
    qid,
    answer,
  }
}

// Async Action Creator
export function handleAddAnswer(authedUser, qid, answer, callback) {
  return dispatch => {
    return saveQuestionAnswer({authedUser, qid, answer})
      .then(() => {
        dispatch(addAnswer(authedUser, qid, answer));
        // callback();
      })
      // .catch(() => {
      //   alert('An error occurred. Please try again.');
      // });
  }
}