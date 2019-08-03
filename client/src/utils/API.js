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
	getStats: function(bnetUser){
		return axios.get("https://owapi.net/api/v3/u/"+bnetUser+"/stats");
	},
	getOWStats: function(bnetData) {
		return axios.post("/api/ow", bnetData);
	}
};
