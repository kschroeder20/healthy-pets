require("dotenv").config();

const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Pets collection and inserts the pets below
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

const petSeed = [
  {
    uid: "rv6Qd4xLGkbUwStfCQfF02koXts2",
    petId: "rv6Qd4xLGkbUwStfCQfF02koXts21",
    date: new Date(Date.now()),
    petName: "Fito",
    petBirthday: "",
    petColor: "Golden",
    petBreed: "Golden Retriever",
    petSpecies: "Dog",
    petSex: "Male",
    petWeight: 80,
    petRabiesTag: 0,
    petMicrochip: 0,
    petMedications: "Some",
    petInoculations: "All",
    petAllergies: "Everything",
    petFood: "Most",
    petProcedures: "None",
    petUrl: "https://dummyimage.com/200x200/696669/ffffff&text=Add+a+Photo"
  },
  {
    uid: "rv6Qd4xLGkbUwStfCQfF02koXts2",
    petId: "rv6Qd4xLGkbUwStfCQfF02koXts22",
    date: new Date(Date.now()),
    petName: "Buster",
    petBirthday: "",
    petColor: "Brown",
    petBreed: "Austrailian Shepard",
    petSpecies: "Dog",
    petSex: "Male",
    petWeight: 80,
    petRabiesTag: 0,
    petMicrochip: 0,
    petMedications: "Some",
    petInoculations: "All",
    petAllergies: "Everything",
    petFood: "Most",
    petProcedures: "None",
    petUrl: "https://dummyimage.com/200x200/696669/ffffff&text=Add+a+Photo"
  }
];

const userSeed = [
  {
    uid: "rv6Qd4xLGkbUwStfCQfF02koXts2",
    ownerName: "Kevin Schroeder",
    homePhone: "000-000-0000",
    mobilePhone: "000-000-0000",
    email: "schroederkevin94@gmail.com",
    address: "111 North St.",
    vetName: "",
    vetPhone: "",
    vetEmail: "",
    vetAddress: "",
    date: new Date(Date.now()),
  }
];

db.Pet.remove({})
  .then(() => db.Pet.collection.insertMany(petSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
