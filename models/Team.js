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
	},
	range1: {
		type: String,
		required: true
	},
	range2: {
		type: String,
		required: true
	},
	goal: {
		type: String,
		required: true
	},
	region: {
		type: String,
		required: true
	},
	about: {
		type: String,
		required: true
	},
});
module.exports = Team = mongoose.model("teams", TeamSchema);
