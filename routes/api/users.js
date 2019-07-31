const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/user"
router.route("/api/users")
    .get(usersController.findAll)
    .post(usersController.create);

// Matches with "/api/users/:id"
router
    .route("/users/:id")
    .get(usersController.findById)
    .put(usersController.update)
    .delete(usersController.remove);

module.exports = router;