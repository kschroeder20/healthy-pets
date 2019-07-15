const router = require("express").Router();
const petRoutes = require("./pets");

// Book routes
router.use("/pets", petRoutes);

module.exports = router;