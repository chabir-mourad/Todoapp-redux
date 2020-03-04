import { createStore } from "redux";
import Todo from "../reducers/index";

const store = createStore(
  Todo,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
