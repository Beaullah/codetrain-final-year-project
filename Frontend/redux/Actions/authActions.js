import firebase from "../../Firebase/Firebase";

export function createEmailAccout(email, password) {
  return async (dispatch) => {
    try {
      const user = await firebase
        .auth()
        .createUserWithEmailPassword(email, password);
      dispatch(loggedIn(user));
    } catch (error) {
      console.log(error);
    }
  };
}
export function loginEmailAccout(email, password) {
  return async (dispatch) => {
    try {
      const user = await firebase
        .auth()
        .signInWithEmailPassword(email, password);
      dispatch(loggedIn(user));
    } catch (error) {
      console.log(error);
    }
  };
}
export function logout() {
  return async (dispatch) => {
    try {
      await firebase.auth().signOut();
      dispatch(loggedOut());
    } catch (error) {
      console.log(error);
    }
  };
}
function loggedIn(user) {
  return {
    type: "LOGGED_IN",
    payload: user,
  };
}

function loggedOut() {
  return {
    type: "LOGGED_OUT",
  };
}
