const db = require("../models");

// Defining methods for the booksController
module.exports = {
    findAll: function (req, res) {
        db.Pet
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Pet
            .find({ uid: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        console.log(req.body)
        db.Pet
            .create(req.body)
            .then(dbModel => {
                res.json(dbModel)
            })
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Pet
            .findOneAndUpdate({ uid: req.body.userId }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Pet
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    downloadPDF: function (req, res) {
        //console.log("HERE")
            //var jsonData = '{ property: abc }';
            var spawn = require('child_process').spawn;
            var child = spawn('ruby', ['client/src/components/downloadPDF/pdf.rb']);
            var pdf = '';
          
            var chunks = [];
          
            child.stdout.on('data', function(data) {
              // insert error check here...
              // console.log("here")
              chunks.push(data);
            });
            child.on('close', function() {
              var pdf = Buffer.concat(chunks);
              console.log(pdf)
              res.setHeader('Content-Type', 'application/pdf');
              res.send(pdf);
            });
          
    }
};
