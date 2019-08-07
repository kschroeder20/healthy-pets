const router = require("express").Router();
const petRoutes = require("./pets");
const userRoutes = require("./users");

router.use("/", petRoutes);
router.use("/", userRoutes);

module.exports = router;