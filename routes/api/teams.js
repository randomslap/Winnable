const express = require("express");
const router = express.Router();
const Team = require("../../models/Team");
const teamsController = require("../../controllers/teamsController");

// router.route("/create").post(teamsController.create)
// router.route()

router.route("/id/:id").get(teamsController.findById);

router.route("/name/:name").get(teamsController.findByName);

router.route("/join/:id").post(teamsController.update);

router.route("/").get(teamsController.findAll);

router.post("/create", (req, res) => {
	Team.findOne({
		$or: [{ teamName: req.body.teamName }, { owner: req.body.owner }]
	}).then(team => {
		if (team) {
			if (
				team.teamName === req.body.teamName &&
				team.owner === req.body.owner
			) {
				return res.status(400).json({
					teamName: "Team Name already exists",
					owner: "You already own a team"
				});
			} else if (team.teamName === req.body.teamName) {
				return res.status(400).json({
					teamName: "Team Name already exists"
				});
			} else if (team.owner === req.body.owner) {
				return res.status(400).json({
					owner: "You already own a team"
				});
			}
		} else {
			const newTeam = new Team({
				owner: req.body.owner,
				teamName: req.body.teamName,
				image: req.body.image,
				region: req.body.region,
				goal: req.body.goal,
				about: req.body.about,
				range1: req.body.range1,
				range2: req.body.range2
			});
			console.log(newTeam);
			newTeam
				.save()
				.then(team => res.json(team))
				.catch(err => console.log(err));
		}
	});
});

module.exports = router;
