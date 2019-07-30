const db = require("../models");
const fs = require("fs");

// Defining methods for the booksController
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
        let petInfo = `
                Owner Name: ${dbModel[0].ownerName}
                Home Phone: ${dbModel[0].homePhone}
                Mobile Phone: ${dbModel[0].mobilePhone}
                Email: ${dbModel[0].email}
                Address: ${dbModel[0].address}
                
                Vet Name:${dbModel[0].vetName}
                Vet Phone:${dbModel[0].vetPhone}
                Vet Email:${dbModel[0].vetEmail}
                Vet Address:${dbModel[0].vetAddress}

                Pet Name:${dbModel[0].petName}
                Pet Birthday:${dbModel[0].petBirthday}
                Pet Color:${dbModel[0].petColor}
                Pet Species: ${dbModel[0].petSpecies}
                Pet Breed:${dbModel[0].petBreed}
                Pet Sex:${dbModel[0].petSex}
                Pet Weight:${dbModel[0].petWeight}
                Pet Picture:${dbModel[0].petUrl}

                Medications: ${dbModel[0].petMedications}
                Inoculations: ${dbModel[0].petInoculations}
                Allergies: ${dbModel[0].petAllergies}
                Procedures: ${dbModel[0].petProcedures}

                Rabies Tage: ${dbModel[0].petRabiesTag}
                Microchip: ${dbModel[0].petMicrochip}
                `;
        fs.writeFile("pdfInfo.txt", petInfo, function(err) {
          if (err) throw err;
          console.log("Saved!");
        });
        res.json(dbModel);
      })
      .catch(err => {
        console.log(err);
        return res.status(422).json(err);
      });
  },
  create: function(req, res) {
    console.log(req.body);
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
  remove: function(req, res) {
    db.Pet.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  downloadPDF: function(req, res) {
    var spawn = require("child_process").spawn;
    var child = spawn("ruby", ["pdf.rb"]);
    var pdf = "";
    child.stdout.on("data", function(data) {
      console.log("HERE");
      pdf = data;
    });
    child.on("exit", function(code) {
      res.setHeader("Content-Type", "application/text");
      res.send(pdf);
    });
  }
};
