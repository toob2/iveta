import { createStore } from "redux";
import navItemReducer from "./reducers/navItemActiveReducer";

function configureStore(state = { active: false }) {
   return createStore(navItemReducer, state);
}

export default configureStore;
