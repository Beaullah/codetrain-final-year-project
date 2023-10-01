const initailState = {
  login: false,
  user: null,
  error: {},
};
export default (state = initailState, action) => {
  switch (action.type) {
    case "lOGGED_In":
      return { ...state, login: true, user: action.payload };
    case "LOGGED_OUT":
      return { ...state, Login: false, user: null };
    case "REGISTER_ERROR":
      return { ...state, error: { register: action.payload } };
    case "LOGIN_ERROR":
      return { ...state, error: { login: action.payload } };
    default:
      return state;
  }
};
