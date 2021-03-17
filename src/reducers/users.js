import {
  RECEIVE_DATA,
  ADD_ANSWER,
} from '../actions/shared';

// Reducer
function users(state = [], action) {
  switch(action.type) {
    case RECEIVE_DATA:
      return action.users;
    case ADD_ANSWER:
      const {authedUser, qid, answer} = action;
      
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        },
      };
    default:
      return state;
  }
}

export default users;