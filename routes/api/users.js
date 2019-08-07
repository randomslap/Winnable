const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const User = require("../../models/User");
const usersController = require("../../controllers/usersController");

router
	.route("/:id")
	.get(usersController.findById)
	.post(usersController.update)
	.delete(usersController.remove);



router.post("/register", (req, res) => {
	const { errors, isValid } = validateRegisterInput(req.body);
	if (!isValid) {
		return res.status(400).json(errors);
	}
	User.findOne({
		$or: [{ email: req.body.email }, { name: req.body.name }]
	}).then(user => {
		console.log(req.body.name);
		if (user) {
			if (user.name === req.body.name && user.email === req.body.email) {
				console.log("Both");
				return res.status(400).json({
					email: "Email already exists",
					name: "Username already exists"
				});
			} else if (
				user.email === req.body.email &&
				user.name != req.body.name
			) {
				console.log("Email");
				return res.status(400).json({ email: "Email already exists" });
			} else if (
				user.name === req.body.name &&
				user.email != req.body.email
			) {
				console.log("Name");
				return res
					.status(400)
					.json({ name: "Username already exists" });
			}
			return;
		} else {
			const newUser = new User({
				name: req.body.name,
				email: req.body.email,
				password: req.body.password,
				battleTag: {
					name: req.body.battleTag.name,
					number: req.body.battleTag.number
				},
				preferredRole: req.body.preferredRole
			});
			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(newUser.password, salt, (err, hash) => {
					if (err) throw err;
					newUser.password = hash;
					newUser
						.save()
						.then(user => res.json(user))
						.catch(err => console.log(err));
				});
			});
		}
	});
});

router.post("/login", (req, res) => {
	const { errors, isValid } = validateLoginInput(req.body);
	if (!isValid) {
		return res.status(400).json(errors);
	}
	const email = req.body.email;
	const password = req.body.password;
	User.findOne({
		$or: [{ email: req.body.email }, { name: req.body.name }]
	}).then(user => {
		console.log(user);
		if (!user) {
			return res
				.status(404)
				.json({ emailnotfound: "Email or Password does not match" });
		}
		bcrypt.compare(password, user.password).then(isMatch => {
			if (isMatch) {
				const payload = {
					id: user.id,
					name: user.name,
					email: user.email,
					team: user.team,
					battleTag: {
						name: user.battleTag.name,
						number: user.battleTag.number
					},
					role: user.preferredRole
				};
				jwt.sign(
					payload,
					keys.secretOrKey,
					{
						expiresIn: 31556926 // 1 year in seconds
					},
					(err, token) => {
						res.json({
							success: true,
							token: "Bearer " + token
						});
					}
				);
			} else {
				return res
					.status(400)
					.json({ passwordincorrect: "Password incorrect" });
			}
		});
	});
});

// router.route("/:id")
// 	.put(usersController.update)

module.exports = router;
