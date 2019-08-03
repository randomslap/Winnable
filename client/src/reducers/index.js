import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import regReducer from "./regReducers"
export default combineReducers({
	auth: authReducer,
	errors: errorReducer,
	reg: regReducer
});
