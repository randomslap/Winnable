const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	team: {
		type: String,
		required: false
	},
	battleTag: {
		name: {
			type: String,
			required: false
		},
		number: {
			type: Number,
			required: false
		}
	},
	date: {
		type: Date,
		default: Date.now
	}
});
module.exports = User = mongoose.model("users", UserSchema);
