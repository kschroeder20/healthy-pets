const router = require("express").Router();
const petsController = require("../../controllers/petsController");

// Matches with "/api/pets"
router.route("/pets")
    .get(petsController.findAll)
    .post(petsController.create);

// Matches with "/api/pets/:id"
router
    .route("/pets/:id")
    .get(petsController.findById)
    .put(petsController.update)
    .delete(petsController.remove);

router
    .route("/pets/update/:id")
    .put(petsController.updateExisting)

router
    .route("/pets/pic/:id")
    .get(petsController.findByPetId)

router
    .route("/pets/writefile/:id")
    .get(petsController.writePetFile)

module.exports = router;