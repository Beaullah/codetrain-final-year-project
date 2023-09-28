const initailState = {
  login: false,
  user: null,
};
export default (state, action) => {
  switch (action.type) {
    case "lOGGED_In":
      return { login: true, user: action.payload };
    case "LOGGED_OUT":
      return { Login: false, user: null };
    default:
      return state;
  }
};
