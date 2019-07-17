const router = require("express").Router();
const petRoutes = require("./pets");

// Use router to start routes from a predefined URL
router.use("/pets", petRoutes);

module.exports = router;