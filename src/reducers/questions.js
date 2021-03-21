import {
  RECEIVE_DATA,
  ADD_QUESTION,
  ADD_ANSWER,
} from '../actions/shared';

// Reducer
function questions(state = [], action) {
  switch(action.type) {
    case RECEIVE_DATA:
      return action.questions;
    case ADD_QUESTION:
      const question = action.question;
      const id = question.id;

      return {
        ...state,
        [id]: question,
      };
    case ADD_ANSWER:
      const {authedUser, qid, answer} = action;
      
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser]),
          },
        },
      };
    default:
      return state;
  }
}

export default questions;