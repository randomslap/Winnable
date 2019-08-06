const express = require("express");
const router = express.Router();

var owjs = require("overwatch-js");
const ow = require("overwatch-stats-api");
// const platform = "pc"

//Matches with /api/ow ???
router.route("/:gamertag").get((req, res) => {
	console.log("Request console logged? " + req.params.gamertag);

	owjs.search(req.params.gamertag)
		.then(response => {
			(async () => {
				const stats = await ow.getAllStats(
					response[0].urlName,
					response[0].platform
				);
				res.json(stats);
			})();
		})
		.catch(err => {
			if (err) {
				console.log("err backend");
				return res.status(404);
			}
		});
});

module.exports = router;
