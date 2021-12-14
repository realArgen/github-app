import { combineReducers } from "redux";
import github from "./github";

const mainReducer = () => combineReducers({ github });

export default mainReducer;