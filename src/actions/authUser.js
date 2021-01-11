export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

// SIGN IN
// Action Creator
function signIn(user) {
  // Action Object
  return {
    type: SIGN_IN,
    user,
  }
}

// Async Action Creator
export function handleSignIn(user) {
  return dispatch => {
    dispatch(signIn(user))
  };
}

// SIGN OUT
// Action Creator
function signOut() {
  // Action Object
  return {
    type: SIGN_OUT,
  }
}

// Async Action Creator
export function handleSignOut() {
  return dispatch => {
    dispatch(signOut());
  }
}