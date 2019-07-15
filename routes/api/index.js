const router = require("express").Router();
const userRoutes = require("./users");
const owRoutes = require("./ow");

router.use("/users", userRoutes);
router.use("/ow", owRoutes);

module.exports = router;
