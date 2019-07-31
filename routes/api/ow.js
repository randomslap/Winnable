const express = require("express");
const router = express.Router();

var owjs = require('overwatch-js');
//const ow = require('overwatch-stats-api');
//const platform = "pc"

//Matches with /api/ow ???
router.route("/")
.get( (req, res) => {

    console.log("Request console logged? "+ req.params)

    owjs
    .search("Loghandi#1297")
    .then((data) => console.dir(data, {depth : 2, colors : true}) );

    // .then((response) => {
    //     (async () => {
    //         const stats = await ow.getBasicInfo(response[0].urlName, platform);
    //         console.log(stats)
    //     })();
    // });

})

module.exports = router;