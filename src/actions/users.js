// import API from 'goals-todos-api';

// Constants
// export const ADD_TODO = 'ADD_TODO';
// export const REMOVE_TODO = 'REMOVE_TODO';
// export const TOGGLE_TODO = 'TOGGLE_TODO';


// // Action Creator
// function addTodo(todo) {
//   // Action Object
//   return {
//     type: ADD_TODO,
//     todo,
//   }
// }

// // Action Creator
// function removeTodo(id) {
//   // Action Object
//   return {
//     type: REMOVE_TODO,
//     id,
//   }
// }

// // Action Creator
// function toggleTodo(id) {
//   // Action Object
//   return {
//     type: TOGGLE_TODO,
//     id,
//   }
// }



// // Async Action Creator
// export function handleAddTodo(name, callback) {
//   return (dispatch) => {
//     return API.saveTodo(name)
//       .then(todo => {
//         dispatch(addTodo(todo));
//         callback();
//       })
//       .catch(() => {
//         alert('An error occurred. Please try again.');
//       });
//   }
// }

// // Async Action Creator
// export function handleDeleteTodo(todo) {
//   return (dispatch) => {
//     dispatch(removeTodo(todo.id));

//     return API.deleteTodo(todo.id)
//       .catch(() => {
//         dispatch(addTodo(todo));
//         alert('An error occurred. Please try again.');
//     });
//   }
// }

// // Async Action Creator
// export function handleToggleTodo(id) {
//   return (dispatch) => {
//     dispatch(toggleTodo(id));

//     return API.saveTodoToggle(id)
//       .catch(() => {
//         dispatch(toggleTodo(id));
//         alert('An error occurred. Please try again.');
//     });
//   }
// }