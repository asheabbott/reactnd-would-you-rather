import {
//   ADD_TODO,
//   REMOVE_TODO,
//   TOGGLE_TODO,
  ADD_ANSWER,
} from '../actions/questions';

import {RECEIVE_DATA} from '../actions/shared';

// Reducer
function questions(state = [], action) {
  switch(action.type) {
    // case ADD_TODO: 
    //   return state.concat([action.todo]);
    // case REMOVE_TODO:
    //   return state.filter(todo => todo.id !== action.id);
    // case TOGGLE_TODO:
    //   return state.map(todo => todo.id !== action.id ? todo : Object.assign({}, todo, {complete: !todo.complete}));
    case ADD_ANSWER:
      // return state.concat([action.answer]);
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
    case RECEIVE_DATA:
      return action.questions;
    default:
      return state;
  }
}

export default questions;