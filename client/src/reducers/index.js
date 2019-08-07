import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import regReducer from "./regReducers";
import teamReducer from "./teamReducers";
export default combineReducers({
	auth: authReducer,
	errors: errorReducer,
	reg: regReducer,
	team: teamReducer
});
