const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const User = require("../../models/User");
const usersController = require("../../controllers/usersController");
var owjs = require("overwatch-js");
const ow = require("overwatch-stats-api");

router
	.route("/update/:id")
	.get(usersController.findById)
	.post(usersController.update)
	.delete(usersController.remove);

router.route("/:id").get(usersController.findById);

router.route("/").get(usersController.findAll);

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
			const battleTag = `${req.body.battleTag.name}#${
				req.body.battleTag.number
			}`;
			let newUser;
			owjs.search(battleTag)
				.then(response => {
					if (response[0].urlName) {
						let stats;
						(async () => {
							stats = await ow.getAllStats(
								response[0].urlName,
								response[0].platform
							);
							let characters = Object.entries(
								stats.heroStats.competitive
							);
							convertTimeStringToNumber = val =>
								Number(val.replace(/:/g, ""));
							characters.sort((char1, char2) => {
								const char1timePlayed = convertTimeStringToNumber(
									char1[1].game.time_played
								);
								const char2timePlayed = convertTimeStringToNumber(
									char2[1].game.time_played
								);

								return char2timePlayed - char1timePlayed;
							});
							newUser = new User({
								name: req.body.name,
								email: req.body.email,
								password: req.body.password,
								battleTag: {
									name: req.body.battleTag.name,
									number: req.body.battleTag.number
								},
								preferredRole: req.body.preferredRole,
								rank: stats.rank,
								rankIcon: stats.rankIconURL,
								userIcon: stats.iconURL,
								level: stats.level,
								gamesWon:
									stats.heroStats.competitive.overall.game
										.games_won,
								endorsementLvl: stats.endorsementLvl,
								preferredHeroes: {
									hero1:
										characters[1][0]
											.charAt(0)
											.toUpperCase() +
										characters[1][0].slice(1),
									hero2:
										characters[2][0]
											.charAt(0)
											.toUpperCase() +
										characters[2][0].slice(1),
									hero3:
										characters[3][0]
											.charAt(0)
											.toUpperCase() +
										characters[3][0].slice(1)
								}
							});
							bcrypt.genSalt(10, (err, salt) => {
								bcrypt.hash(
									newUser.password,
									salt,
									(err, hash) => {
										if (err) throw err;
										newUser.password = hash;
										newUser
											.save()
											.then(user => res.json(user))
											.catch(err => console.log(err));
									}
								);
							});
							// res.json(stats);
						})();
					} else {
						console.log("tester");
					}
				})
				.catch(err => {
					if (err) {
						console.log(err);
						return res.status(400).json({
							battleTagError: "BattleTag does not exist"
						});
					}
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
					role: user.preferredRole,
					rank: user.rank,
					rankIcon: user.rankIcon,
					userIcon: user.userIcon,
					level: user.level,
					gamesWon: user.gamesWon,
					endorsementLvl: user.endorsementLvl,
					preferredHeroes: {
						hero1: user.preferredHeroes.hero1,
						hero2: user.preferredHeroes.hero2,
						hero3: user.preferredHeroes.hero3
					}
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

module.exports = router;
