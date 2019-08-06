const db = require("../models");
const fs = require("fs");

module.exports = {
  findAll: function(req, res) {
    db.Pet.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Pet.find({ uid: req.params.id })
      .then(dbModel => {
        res.json(dbModel);
      })
      .catch(err => {
        console.log(err);
        return res.status(422).json(err);
      });
  },
  create: function(req, res) {
    db.Pet.create(req.body)
      .then(dbModel => {
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Pet.findOneAndUpdate({ uid: req.body.userId }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log(err);
        return res.status(422).json(err);
      });
  },
  updateExisting: function(req, res) {
    db.Pet.findOneAndUpdate({ _id: req.body.currentPetId }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log(err);
        return res.status(422).json(err);
      });
  },
  findByPetId: function(req, res) {
    db.Pet.find({ _id: req.params.id }).then(dbModel => {
      res.json(dbModel);
    });
  },
  remove: function(req, res) {
    db.Pet.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  writePetFile: function(req, res) {
    db.Pet.find({ _id: req.params.id })
      .then(dbModel => {
        let petInfo = `
                Pet Name: ${dbModel[0].petName}
                Pet Birthday: ${dbModel[0].petBirthday}
                Pet Color: ${dbModel[0].petColor}
                Pet Species: ${dbModel[0].petSpecies}
                Pet Breed: ${dbModel[0].petBreed}
                Pet Sex: ${dbModel[0].petSex}
                Pet Weight: ${dbModel[0].petWeight}

                Medications: ${dbModel[0].petMedications}
                Inoculations: ${dbModel[0].petInoculations}
                Allergies: ${dbModel[0].petAllergies}
                Procedures: ${dbModel[0].petProcedures}

                Rabies Tage: ${dbModel[0].petRabiesTag}
                Microchip: ${dbModel[0].petMicroChip}
                `;
        fs.appendFile("pdfInfo.txt", petInfo, function(err) {
          if (err) console.log(err);
        });
        res.json(dbModel);
      })
      .catch(err => console.log(err));
  }
};
