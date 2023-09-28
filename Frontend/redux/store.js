import { createStore, applyMiddleware } from "redux";
import authReducer from "./Reducers/authReducer";
import thunk from "redux-thunk";
let store = createStore(authReducer, applyMiddleware(thunk));

export default store;
