const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
	console.log(data);
	let errors = {};
	// Convert empty fields to an empty string so we can use validator functions
	data.name = !isEmpty(data.name) ? data.name : "";
	data.email = !isEmpty(data.email) ? data.email : "";
	data.password = !isEmpty(data.password) ? data.password : "";
	data.password2 = !isEmpty(data.password2) ? data.password2 : "";
	data.battleTag.name = !isEmpty(data.battleTag.name)
		? data.battleTag.name
		: "";
	data.battleTag.number = !isEmpty(data.battleTag.number)
		? data.battleTag.number
		: "";
	// Name checks
	if (Validator.isEmpty(data.name)) {
		errors.name = "Username is required";
	}
	// Email checks
	if (Validator.isEmpty(data.email)) {
		errors.email = "Email is required";
	} else if (!Validator.isEmail(data.email)) {
		errors.email = "Email is invalid";
	}
	// Password checks
	if (Validator.isEmpty(data.password)) {
		errors.password = "Password field is required";
	}
	if (Validator.isEmpty(data.password2)) {
		errors.password2 = "Confirm password field is required";
	}
	if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
		errors.password = "Password must be at least 6 characters";
	}
	if (!Validator.equals(data.password, data.password2)) {
		errors.password2 = "Passwords must match";
	}
	// BattleTag Checks
	if (Validator.isEmpty(data.battleTag.name)) {
		errors.battleTagName = "BattleTag name ID is required";
	}
	if (Validator.isEmpty(data.battleTag.number)) {
		errors.battleTagNumber = "BattleTag number ID is required";
	}
	return {
		errors,
		isValid: isEmpty(errors)
	};
};
