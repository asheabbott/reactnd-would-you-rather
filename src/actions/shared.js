import * as API from '../utils/_DATA';

// Constants
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_ANSWER = 'ADD_ANSWER';

// Action Creator
function receiveData(users, questions) {
  //Action Object
  return {
    type: RECEIVE_DATA,
    users,
    questions,
  }
}

// Action Creator
function addQuestion(question) {
  // Action Object
  return {
    type: ADD_QUESTION,
    question,
  }
}

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
export function handleInitialData() {
  return dispatch => {
    return Promise.all([
      API._getUsers(),
      API._getQuestions()
    ]).then(([users, questions]) => {
      dispatch(receiveData(users, questions));
    });
  }
}

// Async Action Creator
export function handleAddQuestion(question) {
  return dispatch => {
    return API._saveQuestion(question)
      .then(formattedQuestion => {
        dispatch(addQuestion(formattedQuestion));
      })
      .catch(() => {
        alert('An error occurred. Please try again.');
      });
  }
}

// Async Action Creator
export function handleAddAnswer(authedUser, qid, answer) {
  return dispatch => {
    return API._saveQuestionAnswer({authedUser, qid, answer})
      .then(() => {
        dispatch(addAnswer(authedUser, qid, answer));
      })
      .catch(() => {
        alert('An error occurred. Please try again.');
      });
  }
}