const db = require("../models");
const fs = require("fs");
const path = require('path');

module.exports = {
  findAll: function(req, res) {
    db.User.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User.find({ uid: req.params.id })
      .then(dbModel => {
        // let petInfo = `
        //         Owner Name: ${dbModel[0].ownerName}
        //         Home Phone: ${dbModel[0].homePhone}
        //         Mobile Phone: ${dbModel[0].mobilePhone}
        //         Email: ${dbModel[0].email}
        //         Address: ${dbModel[0].address}
                
        //         Vet Name: ${dbModel[0].vetName}
        //         Vet Phone: ${dbModel[0].vetPhone}
        //         `;
        // fs.writeFile("userInfo.txt", petInfo, function(err) {
        //   if (err) console.log(err); 
        // });
        res.json(dbModel);
      })
      .catch(err => {
        console.log(err);
        return res.status(422).json(err);
      });
  },
  create: function(req, res) {
    console.log(req.body);
    db.User.create(req.body)
      .then(dbModel => {
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User.findOneAndUpdate({ uid: req.body.userId }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log(err);
        return res.status(422).json(err);
      });
  },
  remove: function(req, res) {
    db.User.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  writeUserFile: function (req, res) {
    db.User.find({ uid: req.params.id })
    .then(dbModel => {
      let petInfo = `
              Owner Name: ${dbModel[0].ownerName}
              Home Phone: ${dbModel[0].homePhone}
              Mobile Phone: ${dbModel[0].mobilePhone}
              Email: ${dbModel[0].email}
              Address: ${dbModel[0].address}
              
              Vet Name: ${dbModel[0].vetName}
              Vet Phone: ${dbModel[0].vetPhone}
              `;
      fs.writeFile("pdfInfo.txt", petInfo, function(err) {
        if (err) console.log(err); 
      });
      res.json(dbModel);
    })
    .catch(err => {
      console.log(err);
      return res.status(422).json(err);
    });
  },

  downloadPDF: function(req, res) {
    var spawn = require("child_process").spawn;
    var child = spawn("ruby", ["pdf.rb"]);
    child.on("exit", function(code) {;
        res.download(`./petInfo.pdf`)
    });

  }
};
