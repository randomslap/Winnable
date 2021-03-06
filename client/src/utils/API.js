import axios from "axios";

export default {
	getUsers: function() {
		return axios.get("/api/users");
	},
	getUser: function(id) {
		return axios.get("/api/users/" + id);
	},
	deleteUser: function(id) {
		return axios.delete("/api/users/" + id);
	},
	saveUser: function(userData) {
		return axios.post("/api/users", userData);
	},
	updateUser: function(id, userData) {
		return axios.post("/api/users/update/" + id, userData);
	},
	getOWStats: function(gamertag) {
		return axios.get(`/api/ow/${gamertag}`);
	},
	getTeams: function() {
		return axios.get("/api/teams");
	},
	getTeamById: function(id) {
		return axios.get("/api/teams/id/" + id);
	},
	getTeamByName: function(name) {
		return axios.get("/api/teams/name/" + name);
	},
	deleteTeam: function(id) {
		return axios.delete("/api/teams/" + id);
	},
	updateTeam: function(id, userData) {
		return axios.post("/api/teams/join/" + id, userData);
	},
	saveTeam: function(teamData) {
		return axios.post("/api/teams/create", teamData);
	}
};
