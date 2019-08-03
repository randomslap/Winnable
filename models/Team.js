const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const TeamSchema = new Schema({
	teamName: {
		type: String,
		required: true
	},
	owner: {
		type: String,
		required: true
	},
	members: [
		{
			name: {
				type: String,
				required: false
			}
		}
	],
	pendingMembers: [
		{
			name: {
				type: String,
				required: false
			}
		}
	],
	image: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});
module.exports = Team = mongoose.model("teams", TeamSchema);
