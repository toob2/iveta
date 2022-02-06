import { createStore } from "redux";
import navItemReducer from "./reducers/navItemActiveReducer";

function configureStore(state = { active: 1 }) {
   return createStore(navItemReducer, state);
}

export default configureStore;
