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
	},
	rank: {
		type: String,
		required: false
	},
	userIcon: {
		type: String,
		required: false
	},
	level: {
		type: String,
		required: false
	},
	gamesWon: {
		type: String,
		required: false
	},
	endorsementLvl: {
		type: String,
		required: false
	},
	preferredRole: {
		type: String,
		required: false
	},
	preferredHeroes: {
		hero1: {
			type: String,
			required: false
		},
		hero2: {
			type: String,
			required: false
		},
		hero3: {
			type: String,
			required: false
		},
	},
});
module.exports = User = mongoose.model("users", UserSchema);
