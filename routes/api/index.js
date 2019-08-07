const express = require("express");
const router = express.Router();
const userRoutes = require("./users");
const owRoutes = require("./ow");
const teamRoutes = require("./teams");

router.use("/users", userRoutes);
router.use("/ow", owRoutes);
router.use("/teams", teamRoutes);

module.exports = router;
