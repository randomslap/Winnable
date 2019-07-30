const express = require("express");
const router = express.Router();

var owjs = require('overwatch-js');
const ow = require('overwatch-stats-api');
const platform = "pc"

//Matches with /api/ow ???
router.route("/")
.get(

    owjs
    .search(req)
    .then((response) => {
        (async () => {
            const stats = await ow.getBasicInfo(response[0].urlName, platform);
            console.log(stats)
        })();
    })

)

module.exports = router;