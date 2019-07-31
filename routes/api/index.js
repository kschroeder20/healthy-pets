const router = require("express").Router();
const petRoutes = require("./pets");
const userRoutes = require("./users");

// Use router to start routes from a predefined URL
router.use("/", petRoutes);
router.use("/", userRoutes);

module.exports = router;