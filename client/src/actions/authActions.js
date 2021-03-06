import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {
	GET_ERRORS,
	SET_CURRENT_USER,
	USER_LOADING,
	REGISTER_SUCCESS,
	TEAM_SUCCESS
} from "./types";
export const registerTeam = (teamData, history) => dispatch => {
	console.log(teamData);
	axios
		.post("/api/teams/create", teamData)
		.then(res => {
			console.log("Success");
			dispatch({
				type: TEAM_SUCCESS
			});
			if (res) {
				axios
					.get("/api/teams/name/" + teamData.teamName)
					.then(resTeam => {
						console.log(resTeam);
						axios.post("/api/users/update/" + teamData.owner, {
							team: resTeam.data._id
						});
					});
			}
			// window.location.reload();
		})
		.catch(err => {
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			});
		});
	// axios.all([postTeam(), updateUser()]).then(res => {
	// 	dispatch({
	// 		type: TEAM_SUCCESS
	// 	});
	// });
};
// Register User
export const registerUser = (userData, history) => dispatch => {
	axios
		.post("/api/users/register", userData)
		.then(res => {
			console.log("Success");
			dispatch({
				type: REGISTER_SUCCESS
			});
			// window.location.reload();
		}) // re-direct to login on successful register
		.catch(err => {
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			});
		});
};
// Login - get user token
export const loginUser = userData => dispatch => {
	axios
		.post("/api/users/login", userData)
		.then(res => {
			// Save to localStorage
			// Set token to localStorage
			const { token } = res.data;
			localStorage.setItem("jwtToken", token);
			// Set token to Auth header
			setAuthToken(token);
			// Decode token to get user data
			const decoded = jwt_decode(token);
			// Set current user
			dispatch(setCurrentUser(decoded));
		})
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};
// Set logged in user
export const setCurrentUser = decoded => {
	return {
		type: SET_CURRENT_USER,
		payload: decoded
	};
};
// User loading
export const setUserLoading = () => {
	return {
		type: USER_LOADING
	};
};

export const setRegistered = () => {
	return {
		type: REGISTER_SUCCESS
	};
};
// Log user out
export const logoutUser = () => dispatch => {
	// Remove token from local storage
	localStorage.removeItem("jwtToken");
	// Remove auth header for future requests
	setAuthToken(false);
	// Set current user to empty object {} which will set isAuthenticated to false
	dispatch(setCurrentUser({}));
};
